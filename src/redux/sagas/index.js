import { all, takeLatest, takeEvery } from "redux-saga/effects";
import { sagaLista } from "./postagem/sagaLista";
import { sagaSalvar } from "./postagem/sagaSalvar";

export default function* rootSaga() {
  yield all([
    takeEvery("POSTAGEM_SALVAR", sagaSalvar),
    takeEvery("POSTAGEM_LISTA", sagaLista)
  ]);
}
