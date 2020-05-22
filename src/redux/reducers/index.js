import {combineReducers} from "redux";
import {authReducer} from "./auth";
import {todosReducer} from "./todos";

export const rootReducer = combineReducers({authReducer, todosReducer});
