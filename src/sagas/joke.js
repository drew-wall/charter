import { call, put, takeLatest } from 'redux-saga/effects'
import * as types from '../actions/joketypes'
import getJoke from '../apis/joke'


export function* fetchJoke() {
  const { data, error } = yield call(getJoke)
  if (data) {
    yield put({ type: types.GET_JOKE_SUCCESS, data })
  }
  else {
    yield put({ type: types.GET_JOKE_FAILED, error })
  }
}

export function* watchForJoke() {
  yield takeLatest(types.GET_JOKE, fetchJoke)
}
