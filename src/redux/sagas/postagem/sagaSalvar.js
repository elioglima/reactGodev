import { call, put } from "redux-saga/effects";
import apiPostagemSalvar from "../../../services/postagem/apiPostagemSalvar";
import logs from "../../../logs";

import {
  postagemSalvarSuccess,
  postagemSalvarError
} from "../../actions/postagem/actionSalvar";

export function* sagaSalvar({ registro, editandoRegistro, inserindoRegistro }) {
  logs("Saga postagemSalvar");
  let method = inserindoRegistro
    ? "novo"
    : editandoRegistro
    ? "editar"
    : undefined;
  const retornoAPI = yield call(apiPostagemSalvar, {
    registro,
    method
  });
  logs("Saga postagemSalvar retornoAPI", retornoAPI);
  if (retornoAPI.err === true) {
    logs("Saga postagemSalvar postagemSalvarError", retornoAPI.obj);
    return yield put(postagemSalvarError(retornoAPI.obj));
  }
  logs("Saga postagemSalvar postagemSalvarSuccess", retornoAPI.obj);
  yield put(postagemSalvarSuccess(retornoAPI.obj));
}
