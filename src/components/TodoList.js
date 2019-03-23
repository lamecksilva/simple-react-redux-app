import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todoActions } from '../actions';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodoText: ''
    };
  }

  addNewTodo = () => {
    this.props.addTodo(this.state.newTodoText);

    this.setState({ newTodoText: '' });
  };

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

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = {
  addTodo: todoActions.addTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
