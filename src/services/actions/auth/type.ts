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

export type TAuthActions =
  | IRegistrationRequestAction
  | IRegistrationSuccessfulAction
  | IRegistrationFailedAction
  | ILoginRequestAction
  | ILoginSuccessfulAction
  | ILoginFailedAction
  | ILogoutRequestAction
  | ILogoutSuccessfulAction
  | ILogoutFailedAction
  | ICheckTokenRequestAction
  | ICheckTokenSuccessfulAction
  | ICheckTokenUnsuccessfulAction
  | ICheckTokenFailedAction
  | IUpdateUserRequestAction
  | IUpdateUserSuccessfulAction
  | IUpdateUserFailedAction;
