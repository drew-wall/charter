import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_JOKE } from '../actions/joketypes'
import * as actions from '../actions/joke'
import getJoke from '../apis/joke'


export function* fetchJoke() {
  const { data, error } = yield call(getJoke)
  if (data) {
    yield put(actions.getJokeSuccess(data))
  }
  else {
    yield put(actions.getJokeFailed(error))
  }
}

export function* watchForJoke() {
  yield takeLatest(GET_JOKE, fetchJoke)
}
