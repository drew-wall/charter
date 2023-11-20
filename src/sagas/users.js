import { call, put, takeLatest } from 'redux-saga/effects'
import * as types from '../actions/usertypes'
import getUsers from '../apis/users'


export function* fetchUsers() {
  const { data, error } = yield call(getUsers)
  if (data) {
    yield put({ type: types.GET_USERS_SUCCESS, data })
  }
  else {
    yield put({ type: types.GET_USERS_FAILED, error })
  }
}

export function* watchForUsers() {
  yield takeLatest(types.GET_USERS, fetchUsers)
}
