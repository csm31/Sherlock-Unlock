import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cardReducer from "../features/Card/cardSlice";

// Create a root reducer which will delegate the action to your combined reducer
// Allow to reset the state

const combinedReducer = combineReducers({
  card: cardReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'card/resetGame') { // check for action type 
    state = undefined;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

