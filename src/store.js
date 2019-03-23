import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers';

// Set the initial state
const initialState = {};

// Set middleware to thunk
// for more info about this, search for redux-thunk
const middleware = [thunk];

// Make the redux extension 'connectable' with the react app
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creating the store
const store = createStore(
  appReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
