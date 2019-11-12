import { all, takeLatest, takeEvery } from "redux-saga/effects";

import { login } from "./login";
import { postagemEdicao, postagemSelect } from "./postagemEdicao";

export default function* rootSaga() {
  yield all([
    takeEvery("LOGIN", login),
    takeLatest("POSTAGEM_EDICAO_LISTA", postagemEdicao),
    takeLatest("POSTAGEM_EDICAO_SELECTID", postagemSelect)
  ]);
}
