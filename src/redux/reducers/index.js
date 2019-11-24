import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import modais from "./modais";
import reducerLista from "./postagem/reducerLista";
import reduceSalvar from "./postagem/reduceSalvar";
import reduceMetricas from "./metricas";
import acesso from "./acesso";

export const reducers = history =>
  combineReducers({
    router: connectRouter(history),
    modais,
    acesso,
    metrics: reduceMetricas,
    postagens: reducerLista,
    postagemSalvar: reduceSalvar
  });
