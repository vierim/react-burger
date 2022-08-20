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

import {
  IRegistrationRequestAction,
  IRegistrationSuccessfulAction,
  IRegistrationFailedAction,
  ILoginRequestAction,
  ILoginSuccessfulAction,
  ILoginFailedAction,
  ILogoutRequestAction,
  ILogoutSuccessfulAction,
  ILogoutFailedAction,
  ICheckTokenRequestAction,
  ICheckTokenSuccessfulAction,
  ICheckTokenUnsuccessfulAction,
  ICheckTokenFailedAction,
  IUpdateUserRequestAction,
  IUpdateUserSuccessfulAction,
  IUpdateUserFailedAction,
} from './interfaces';

import { TUser } from '../../../types';

export const registrationRequestAction = (): IRegistrationRequestAction => ({
  type: REGISTRTION_REQUEST,
});

export const registrationSuccessfulAction = (
  user: TUser
): IRegistrationSuccessfulAction => ({
  type: REGISTRTION_SUCCESSFUL,
  payload: user,
});

export const registrationFailedAction = (): IRegistrationFailedAction => ({
  type: REGISTRTION_FAILED,
});

export const loginRequestAction = (): ILoginRequestAction => ({
  type: LOGIN_REQUEST,
});

export const loginSuccessfulAction = (user: TUser): ILoginSuccessfulAction => ({
  type: LOGIN_SUCCESSFUL,
  payload: user,
});

export const loginFailedAction = (): ILoginFailedAction => ({
  type: LOGIN_FAILED,
});

export const logoutRequestAction = (): ILogoutRequestAction => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccessfulAction = (): ILogoutSuccessfulAction => ({
  type: LOGOUT_SUCCESSFUL,
});

export const logoutFailedAction = (): ILogoutFailedAction => ({
  type: LOGOUT_FAILED,
});

export const checkTokenRequestAction = (): ICheckTokenRequestAction => ({
  type: CHECK_TOKEN_REQUEST,
});

export const checkTokenSuccessfulAction = (
  user: TUser
): ICheckTokenSuccessfulAction => ({
  type: CHECK_TOKEN_SUCCESSFUL,
  payload: user,
});

export const checkTokenUnsuccessfulAction = (): ICheckTokenUnsuccessfulAction => ({
  type: CHECK_TOKEN_UNSUCCESSFUL,
});

export const checkTokenFailedAction = (): ICheckTokenFailedAction => ({
  type: CHECK_TOKEN_FAILED,
});

export const updateUserRequestAction = (): IUpdateUserRequestAction => ({
  type: UPDATE_REQUEST,
});

export const updateUserSuccessfulAction = (
  user: TUser
): IUpdateUserSuccessfulAction => ({
  type: UPDATE_SUCCESSFUL,
  payload: user,
});

export const updateUserFailedAction = (): IUpdateUserFailedAction => ({
  type: UPDATE_FAILED,
});
