import * as actions from '../actions/joketypes'

const initialState = {
  joke: '',
  punchline: '',
  loading: false,
  error: ''
}

function jokeReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_JOKE: {
      return { 
        ...initialState,
        loading: true,
      }
    }
    case actions.GET_JOKE_SUCCESS: {
      const { setup: joke, punchline } = action.data
      return {
        ...state,
          joke,
          punchline,
          loading: false,
          error: '',
      }
    }
    case actions.GET_JOKE_FAILED: {
      return { 
        ...state,
          joke: '',
          punchline: '',
          loading: false,
          error: action.error,
      }
    }
    default: {
      return state
    }
  }
}

export default jokeReducer