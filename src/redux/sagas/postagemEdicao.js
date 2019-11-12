import { call, put } from "redux-saga/effects";
import apiPostagemLista from "../../services/postagem/lista";
import apiPostagemId from "../../services/postagem/id";

import {
  EdicaoListaSuccess,
  EdicaoListaError
} from "../actions/postagemEdicao";

export function* postagemEdicao({ payload }) {
  // solicita login
  const retornoAPI = yield call(apiPostagemLista, payload);
  if (retornoAPI.err === true)
    return yield put(EdicaoListaError(retornoAPI.data));
  yield put(EdicaoListaSuccess(retornoAPI.data));
}

export function* postagemSelect({ id }) {
  // solicita login
  console.log("aùiiiiiiii", id);
  const retornoAPI = yield call(apiPostagemId, { id: id });
  console.log(retornoAPI.data.length);
  if (retornoAPI.data.length === 0)
    return yield put(EdicaoListaError({ Selecionado: {} }));

  yield put(EdicaoListaSuccess({ Selecionado: retornoAPI.data[0] }));
}
