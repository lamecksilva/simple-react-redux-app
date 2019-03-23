import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import TodoList from './components/TodoList';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <TodoList />
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
