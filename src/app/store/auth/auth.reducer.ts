/* eslint-disable no-undef */
import { AuthState, authAdapter, initialState } from './auth.state';
import { AuthActions, AuthActionsTypes } from './auth.action';

export function authReducer(
  state = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionsTypes.SIGNUP:
      console.log('BEGIN');
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AuthActionsTypes.SIGNUP_SUCCESS:
      console.log('SUCCESS');
      return authAdapter.addOne(action.payload, {
        ...state,
        loading: false,
        error: null,
      });
    case AuthActionsTypes.SIGNUP_ERROR:
      console.log('ERROR');
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AuthActionsTypes.LOGIN:
      console.log('LOGIN');
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AuthActionsTypes.LOGIN_SUCCESS:
      console.log('SUCCESS');
      return authAdapter.addOne(action.payload, {
        ...state,
        loading: false,
        error: null,
      });
    case AuthActionsTypes.LOGIN_ERROR:
      console.log('ERROR');
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AuthActionsTypes.LOGOUT:
      return state;
    default:
      return state;
  }
}
