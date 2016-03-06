'use strict'

import {
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOGOUT_REQUEST,
  LOGOUT_RESPONSE,
  CHECK_COOKIE_REQUEST,
  CHECK_COOKIE_RESPONSE,
} from '../actions/auth'

const authState = {
  isLoggedIn: false,
  hasError: false,
  niceError: null
}

export default function auth (state = authState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        hasError: false,
        niceError: null
      }

    case 'AUTH_VALIDATED':
    case LOGIN_RESPONSE:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        hasError: action.hasError,
        niceError: action.niceError
      }

    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        hasError: false,
        niceError: null
      }

    case LOGOUT_RESPONSE:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        hasError: action.hasError,
        niceError: action.niceError
      }

    case CHECK_COOKIE_REQUEST:
      return {
        ...state,
        isLoggedIn: false
      }

    case CHECK_COOKIE_RESPONSE:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      }

    default:
      return state
  }
}
