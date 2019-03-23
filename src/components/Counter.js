import React from 'react';
import { connect } from 'react-redux';

// Simple component to print the numbers of todos stored
const Counter = props => <h5>You Have {props.todos.length} todos stored.</h5>;

// Bring the todos array in the redux state, to this component
const mapStateToProps = state => ({
  todos: state.todos
});

// Connecting component to redux store
export default connect(mapStateToProps)(Counter);
