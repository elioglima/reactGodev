import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import Login from './login'

export const reducers = (history) => combineReducers({
    router: connectRouter(history),
    Login,
})