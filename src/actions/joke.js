import * as types from './joketypes'

export const getJoke = () => ({
  type: types.GET_JOKE,
})

export const getJokeSuccess = data => ({
  type: types.GET_JOKE_SUCCESS,
  data,
})

export const getJokeFailed = error => ({
  type: types.GET_JOKE_FAILED,
  error,
})

