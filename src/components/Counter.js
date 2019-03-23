import React from 'react';
import { connect } from 'react-redux';

const Counter = props => <h5>You Have {props.todos.length} todos stored.</h5>;

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Counter);
