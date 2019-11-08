import { call, put } from 'redux-saga/effects'
import apiPostagemLista from '../../services/postagem/lista'
import { EdicaoListaSuccess, EdicaoListaError } from '../actions/postagemEdicao'

export function* postagemEdicao({ payload }) { // solicita login
    const retornoAPI = yield call(apiPostagemLista, payload)
    if (retornoAPI.err === true) return yield put(EdicaoListaError(retornoAPI.data))
    yield put(EdicaoListaSuccess(retornoAPI.data))
}