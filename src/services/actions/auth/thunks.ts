import {
  registrationRequestAction,
  registrationSuccessfulAction,
  registrationFailedAction,
  loginRequestAction,
  loginSuccessfulAction,
  loginFailedAction,
  logoutRequestAction,
  logoutSuccessfulAction,
  logoutFailedAction,
  checkTokenRequestAction,
  checkTokenSuccessfulAction,
  checkTokenUnsuccessfulAction,
  checkTokenFailedAction,
  updateUserRequestAction,
  updateUserSuccessfulAction,
  updateUserFailedAction
} from './index';

import { AppDispatch, AppThunk } from '../../types';
import { TUserData, TUserAuth, TUserUpdate } from '../../../types';

import * as api from '../../../utils/api';
import { logErrorToConsole } from '../../../utils/utils';
import { setCookie, removeCookie } from '../../../utils/cookies';

export const sendRegistrationRequestThunk: AppThunk =
  (user: TUserData) => (dispatch: AppDispatch) => {
    dispatch(registrationRequestAction());

    api
      .createUserAccount(user)
      .then((res) => {
        if (res.success) {
          dispatch(registrationSuccessfulAction(res.user));
        } else {
          dispatch(registrationFailedAction());
        }
      });
  };

export const sendLoginRequestThunk: AppThunk =
  (user: TUserAuth) => (dispatch: AppDispatch) => {
    dispatch(loginRequestAction());
    
    api
      .loginToAccount(user)
      .then((res) => {
        if(res.success) {
          setCookie('token', res.accessToken.split('Bearer ')[1]);
          localStorage.setItem('refreshToken', res.refreshToken);

          dispatch(loginSuccessfulAction(res.user));
        }
      })
      .catch((err) => {
        dispatch(loginFailedAction());
        logErrorToConsole(err);
      });
  };

export const sendLogoutRequestThunk: AppThunk = 
  () => (dispatch: AppDispatch) => {
    dispatch(logoutRequestAction());

    const data = {
      token: localStorage.getItem('refreshToken'),
    };

    api
      .logoutFromAccount(data)
      .then((res) => {
        if (res.success) {
          removeCookie('token');
          localStorage.removeItem('refreshToken');

          dispatch(logoutSuccessfulAction());
        }
      })
      .catch((err) => {
        dispatch(logoutFailedAction());
        logErrorToConsole(err);
      });
  };

export const checkAuthUserThunk: AppThunk 
  = () => (dispatch: AppDispatch) => {
    dispatch(checkTokenRequestAction());

    api
      .getUserData()
      .then((res) => {
        dispatch(checkTokenSuccessfulAction(res.user));
      })
      .catch((err) => {
        if (err === '401 Unauthorized') {
          dispatch(checkTokenUnsuccessfulAction());
        } else {
          dispatch(checkTokenFailedAction());
          logErrorToConsole(err);
        }
      });
  };

export const updateUserInfoThunk: AppThunk =
  (data: TUserUpdate) => (dispatch: AppDispatch) => {
    dispatch(updateUserRequestAction());

    api
      .updateUserData(data)
      .then((res) => {
        dispatch(updateUserSuccessfulAction(res.user));
      })
      .catch((err) => {
        dispatch(updateUserFailedAction());
        logErrorToConsole(err);
      });
  };
