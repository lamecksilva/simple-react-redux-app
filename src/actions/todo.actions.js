// Action to create a new todo
const addTodo = text => {
  return {
    type: 'ADD_TODO',
    payload: text
  };
};

export const todoActions = {
  addTodo
};
