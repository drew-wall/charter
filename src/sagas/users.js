import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_USERS } from '../actions/usertypes'
import * as actions from '../actions/users'
import getUsers from '../apis/users'


export function* fetchUsers() {
  const { data, error } = yield call(getUsers)
  if (data) {
    yield put(actions.getUsersSuccess(data))
  }
  else {
    yield put(actions.getUsersFailed(error))
  }
}

export function* watchForUsers() {
  yield takeLatest(GET_USERS, fetchUsers)
}
