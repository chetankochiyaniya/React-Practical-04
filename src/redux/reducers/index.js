import userListReducer from "./userListReducer";
import screenReducer from "./screenReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userListReducer: userListReducer,
  screenReducer: screenReducer
})

export default rootReducer;