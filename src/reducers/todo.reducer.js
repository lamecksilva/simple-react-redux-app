// Declaring the initial state for the reducer
const initialState = [];

// The reducer function, receive the state and the action
export default function(state = initialState, action) {
  // Switch with the type of the action
  switch (action.type) {
    // If action.type is "ADD_TODO", add a new todo to the end of array
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Math.random(),
          text: action.payload
        }
      ];

    default:
      return state;
  }
}
