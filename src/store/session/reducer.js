import * as types from './actionTypes'

const initialState = {
  loginLoading: false,
  logoutLoading: false,
  registerLoading: false,
  isAuthenticated: false,
  user: {},
  error: '',
}

const session = (state = initialState, action) => {
  switch (action.type) {

    //LOGIN REDUCER
    case types.LOGIN_LOADING:
      return { ...state, loginLoading: true, error: null }
    case types.LOGIN_SUCCESS:
      return { ...state, loginLoading: false, isAuthenticated: true, user: action.user, error: null }
    case types.LOGIN_ERROR:
      return { ...state, loginLoading: false, user: {}, isAuthenticated: false, error: action.error }

    //LOGOUT REDUCER
    case types.LOGOUT_LOADING:
      return { ...state, logoutLoading: true, error: null }
    case types.LOGOUT_SUCCESS:
      return initialState
    case types.LOGOUT_ERROR:
      return { ...state, logoutLoading: false, error: action.error }

    //REGISTER REDUCER
    case types.REGISTER_LOADING:
      return { ...state, registerLoading: true, error: null }
    case types.REGISTER_SUCCESS:
      return { ...state, registerLoading: false , error: null }
    case types.REGISTER_ERROR:
      return { ...state, registerLoading: false , error: action.error }
    default:
      return state
  }
}

export default session
