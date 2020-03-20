import { combineReducers } from "redux";
import LoginRedcuer from "./reducers/loginInfo.js";

export const allReducers = combineReducers({
    login: LoginRedcuer
})