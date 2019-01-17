import { combineReducers } from "redux";
import { root } from "./root";
import { login } from "./login";

export default combineReducers({
    root,
    login
})