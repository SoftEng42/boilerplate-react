import * as types from './actionTypes'
import { apiUrl } from '../../config'
import { history } from '../../helpers';

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch(loginLoading())

    fetch(apiUrl.SIGNIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
      })
    })
      .then(response => response.json())
      .then(json => {
        if('success' in json && json.success === true) {
          var user = json.user;
          user.token = json.token;
          dispatch(loginSuccess(user))
          history.push('/');
        }
      })
      .catch((error) => {
        dispatch(loginError(error.message))
      });
  }
}

export const logoutUser = () => {
  return (dispatch, getState) => {
    dispatch(logoutLoading())
    const user = getState().session.user;;

    fetch(apiUrl.LOGOUT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "token": user.token,
      })
    })
      .then(response => response.json())
      .then(json => {
        if('success' in json && json.success === true) {
          dispatch(logoutSuccess())
          history.push('/');
        }
      })
      .catch((error) => {
        dispatch(logoutError(error.message))
      });
  }
}

export const registerUser = (fullname, email, password) => {
  return (dispatch) => {
    dispatch(registerLoading())

    fetch(apiUrl.REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "fullname": fullname,
        "email": email,
        "password": password,
      })
    })
      .then(response => response.json())
      .then(json => {
        if('success' in json && json.success === true) {
          dispatch(registerSuccess())
          history.push('/');
        }
      })
      .catch((error) => {
        dispatch(registerError(error.message))
      });
  }
}

const loginLoading = () => ({
  type: types.LOGIN_LOADING
})

const loginSuccess = user => ({
  type: types.LOGIN_SUCCESS,
  user
})

const loginError = error => ({
  type: types.LOGIN_ERROR,
  error
})

const logoutLoading = () => ({
  type: types.LOGOUT_LOADING
})

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
})

const logoutError = error => ({
  type: types.LOGOUT_ERROR,
  error
})


const registerLoading = () => ({
  type: types.REGISTER_LOADING
})

const registerSuccess = () => ({
  type: types.REGISTER_SUCCESS,
})

const registerError = error => ({
  type: types.REGISTER_ERROR,
  error
})