import { all, takeLatest, takeEvery } from "redux-saga/effects";
import { sagaLista } from "./postagem/sagaLista";
import { sagaSalvar } from "./postagem/sagaSalvar";
import { sagaEntrarSistema } from "./acesso/sagaEntrarSistema";

export default function* rootSaga() {
  yield all([
    takeEvery("ACESSO_SIS", sagaEntrarSistema),
    takeEvery("POSTAGEM_SALVAR", sagaSalvar),
    takeEvery("POSTAGEM_LISTA", sagaLista)
  ]);
}
