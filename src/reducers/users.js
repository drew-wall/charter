import * as actions from '../actions/usertypes'

const initialState = {
  users: [],
  loading: false,
  error: ''
}

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USERS: {
      return { 
        ...initialState,
        loading: true,
      }
    }
    case actions.GET_USERS_SUCCESS: {
      return {
        ...state,
          users: action.data,
          loading: false,
          error: '',
      }
    }
    case actions.GET_USERS_FAILED: {
      return { 
        ...state,
          data: [],
          loading: false,
          error: action.error,
      }
    }
    default: {
      return state
    }
  }
}

export default usersReducer