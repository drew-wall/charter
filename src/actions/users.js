import * as types from './usertypes'

export const getUsers = () => ({
  type: types.GET_USERS,
})

export const getUsersSuccess = data => ({
  type: types.GET_USERS_SUCCESS,
  data,
})

export const getUsersFailed = error => ({
  type: types.GET_USERS_FAILED,
  error,
})

