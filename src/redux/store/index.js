import { createStore } from "redux";
import userListReducer from "../reducers";

export const store = createStore (userListReducer) 