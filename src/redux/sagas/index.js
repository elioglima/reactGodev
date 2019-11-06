import { all, takeLatest, takeEvery } from 'redux-saga/effects'

import { login } from './login'

export default function* rootSaga() {
    yield all([
        takeEvery('LOGIN', login),
    ])
}
