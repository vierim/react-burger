import {
  REGISTRTION_REQUEST,
  REGISTRTION_SUCCESSFUL,
  REGISTRTION_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESSFUL,
  LOGOUT_FAILED,
  CHECK_TOKEN_REQUEST,
  CHECK_TOKEN_SUCCESSFUL,
  CHECK_TOKEN_UNSUCCESSFUL,
  CHECK_TOKEN_FAILED,
  UPDATE_REQUEST,
  UPDATE_SUCCESSFUL,
  UPDATE_FAILED,
} from './constants';

import { TUser } from '../../../types';

export interface IRegistrationRequestAction {
  readonly type: typeof REGISTRTION_REQUEST;
}

export interface IRegistrationSuccessfulAction {
  readonly type: typeof REGISTRTION_SUCCESSFUL;
  readonly payload: TUser;
}

export interface IRegistrationFailedAction {
  readonly type: typeof REGISTRTION_FAILED;
}

export interface ILoginRequestAction {
  readonly type: typeof LOGIN_REQUEST;
}

export interface ILoginSuccessfulAction {
  readonly type: typeof LOGIN_SUCCESSFUL;
  readonly payload: TUser;
}

export interface ILoginFailedAction {
  readonly type: typeof LOGIN_FAILED;
}

export interface ILogoutRequestAction {
  readonly type: typeof LOGOUT_REQUEST;
}

export interface ILogoutSuccessfulAction {
  readonly type: typeof LOGOUT_SUCCESSFUL;
}

export interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_FAILED;
}

export interface ICheckTokenRequestAction {
  readonly type: typeof CHECK_TOKEN_REQUEST;
}

export interface ICheckTokenSuccessfulAction {
  readonly type: typeof CHECK_TOKEN_SUCCESSFUL;
  readonly payload: TUser;
}

export interface ICheckTokenUnsuccessfulAction {
  readonly type: typeof CHECK_TOKEN_UNSUCCESSFUL;
}

export interface ICheckTokenFailedAction {
  readonly type: typeof CHECK_TOKEN_FAILED;
}

export interface IUpdateUserRequestAction {
  readonly type: typeof UPDATE_REQUEST;
}

export interface IUpdateUserSuccessfulAction {
  readonly type: typeof UPDATE_SUCCESSFUL;
  readonly payload: TUser;
}

export interface IUpdateUserFailedAction {
  readonly type: typeof UPDATE_FAILED;
}
