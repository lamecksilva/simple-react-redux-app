// Action to create a new todo
const addTodo = text => {
  return {
    // All actions have a type
    type: 'ADD_TODO',
    // "Payloads" are optionals
    payload: text
  };
};

export const todoActions = {
  addTodo
};
