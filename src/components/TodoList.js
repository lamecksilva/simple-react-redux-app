import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todoActions } from '../actions';

class TodoList extends Component {
  constructor(props) {
    super(props);

    // Set the state of component
    this.state = {
      newTodoText: ''
    };
  }

  // Method to send action text to redux
  addNewTodo = () => {
    // Actions stay in the props of component
    this.props.addTodo(this.state.newTodoText);

    this.setState({ newTodoText: '' });
  };

  // Method to handle changes of input's
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="row ">
        <div className="col s12 center-align">
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                className="validate "
                name="newTodoText"
                value={this.state.newTodoText}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col s12 center-align">
              <button
                className="btn waves-effect waves-light"
                onClick={this.addNewTodo}
              >
                Add Todo
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col s12 center-align">
              <ul>
                {this.props.todos.map(todo => (
                  <li key={todo.id}>
                    <h5>{todo.text}</h5>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Bring the todos in the redux state (store) to the component props
const mapStateToProps = state => ({
  todos: state.todos
});

// Make actions to props
const mapDispatchToProps = {
  addTodo: todoActions.addTodo
};

// Connecting component to redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
