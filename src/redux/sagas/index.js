import { all, takeLatest, takeEvery } from 'redux-saga/effects'

import { login } from './login'
import { postagemEdicao } from './postagemEdicao'

export default function* rootSaga() {
    yield all([
        takeEvery('LOGIN', login),
        takeEvery('POSTAGEM_EDICAO_LISTA', postagemEdicao),
    ])
}
