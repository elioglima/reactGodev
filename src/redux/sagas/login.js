import { call, put } from 'redux-saga/effects'
import apiLogin from '../../services/apiLogin'
import { loginSuccess, loginError } from '../actions/login'

export function* login({ payload }) { // solicita login
    const retornoAPI = yield call(apiLogin, payload)
    if (retornoAPI.err === true) return yield put(loginError(retornoAPI.data))
    yield put(loginSuccess(retornoAPI.data))
}