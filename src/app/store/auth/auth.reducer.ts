/* eslint-disable no-undef */
import { AuthState, authAdapter, initialState } from './auth.state';
import { AuthActions, AuthActionsTypes } from './auth.action';

export function authReducer(
  state = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionsTypes.SIGNUP:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AuthActionsTypes.SIGNUP_SUCCESS:
      return authAdapter.addOne(action.payload, {
        ...state,
        loading: false,
        error: null,
      });
    case AuthActionsTypes.SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AuthActionsTypes.LOGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AuthActionsTypes.LOGIN_SUCCESS:
      return authAdapter.addOne(action.payload, {
        ...state,
        loading: false,
        error: null,
      });
    case AuthActionsTypes.LOGIN_ERROR:
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
