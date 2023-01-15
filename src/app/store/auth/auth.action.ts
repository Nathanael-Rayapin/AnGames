import { Action } from '@ngrx/store';
import { User } from 'src/app/model/user/user.model';

export enum AuthActionsTypes {
  SIGNUP = 'SIGNUP',
  SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
  SIGNUP_ERROR = 'SIGNUP_ERROR',
  LOGIN = 'LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
  AUTO_LOGIN = 'AUTO_LOGIN',
  LOGOUT = 'LOGOUT',
}

// Signup
export class SignUp implements Action {
  readonly type = AuthActionsTypes.SIGNUP;
  constructor(public payload: User) {}
}

// Signup Success
export class SignUpSuccess implements Action {
  readonly type = AuthActionsTypes.SIGNUP_SUCCESS;
  constructor(public payload: User) {}
}

// Signup Error
export class SignUpError implements Action {
  readonly type = AuthActionsTypes.SIGNUP_ERROR;
  constructor(public payload: string) {}
}

// Login
export class Login implements Action {
  readonly type = AuthActionsTypes.LOGIN;
  constructor(public payload: User) {}
}

// Login Sucess
export class LoginSuccess implements Action {
  readonly type = AuthActionsTypes.LOGIN_SUCCESS;
  constructor(public payload: User | any) {}
}

// Login Error
export class LoginError implements Action {
  readonly type = AuthActionsTypes.LOGIN_ERROR;
  constructor(public payload: string) {}
}

// Logout
export class Logout implements Action {
  readonly type = AuthActionsTypes.LOGOUT;
}

export type AuthActions =
  | SignUp
  | SignUpSuccess
  | SignUpError
  | Login
  | LoginSuccess
  | LoginError
  | Logout;
