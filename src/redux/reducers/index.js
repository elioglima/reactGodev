import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import Login from './login'
import PostagemEdicao from './postagemEdicao'

export const reducers = (history) => combineReducers({
    router: connectRouter(history),
    Login,
    PostagemEdicao,
})