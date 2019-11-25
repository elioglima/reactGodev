import { call, put } from "redux-saga/effects";
import apiEntrarSistema from "../../../services/acesso/apiEntrarSistema";
import logs from "../../../logs";

import {
  acEntrarSistemaError,
  acEntrarSistemaSuccess
} from "../../actions/acesso/actionAcesso";

export function* sagaEntrarSistema({ email, password }) {
  logs("Saga Acesso");
  const retornoAPI = yield call(apiEntrarSistema, { email, password });
  logs("Saga Acesso rtornoAPI", retornoAPI);
  if (retornoAPI.err === true) {
    logs("Saga Acesso acEntrarSistemaError", retornoAPI.obj);
    return yield put(acEntrarSistemaError(retornoAPI.obj));
  }
  logs("Saga Acesso acEntrarSistemaSuccess", retornoAPI.obj);
  yield put(acEntrarSistemaSuccess(retornoAPI.obj));
}
