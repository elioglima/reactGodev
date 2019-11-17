import { call, put } from "redux-saga/effects";
import apiPostagemLista from "../../../services/postagem/apiPostagemLista";
import logs from "../../../logs";

import {
  acPostagemListaError,
  acPostagemListaSuccess
} from "../../actions/postagem/actionLista";

export function* sagaLista() {
  logs("Saga Lista");
  const retornoAPI = yield call(apiPostagemLista, {});
  logs("Saga Lista retornoAPI", retornoAPI);
  if (retornoAPI.err === true) {
    logs("Saga Lista acPostagemListaError", retornoAPI.obj);
    return yield put(acPostagemListaError(retornoAPI.obj));
  }
  logs("Saga Lista acPostagemListaSuccess", retornoAPI.obj);
  yield put(acPostagemListaSuccess(retornoAPI.obj));
}
