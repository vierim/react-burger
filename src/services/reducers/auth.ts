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
} from '../actions/auth/constants';

import { TAuthActions } from '../actions/auth/type';
import { TUser } from '../../types';

type TAuthState = {
  isAuthChecked: boolean;
  data: TUser | null;
  sendRequest: boolean;
  requestFailed: boolean;
};

const initialState: TAuthState = {
  isAuthChecked: false,
  data: null,
  sendRequest: false,
  requestFailed: false,
};

export const authReducer = (
  state = initialState,
  action: TAuthActions
) => {
  switch (action.type) {
    case REGISTRTION_REQUEST: {
      return {
        ...state,
        sendRequest: true,
        requestFailed: false,
      };
    }
    case REGISTRTION_SUCCESSFUL: {
      return {
        isAuthChecked: true,
        data: action.payload,
        sendRequest: false,
        requestFailed: false,
      };
    }
    case REGISTRTION_FAILED: {
      return {
        ...initialState,
        requestFailed: true,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...initialState,
        sendRequest: true,
      };
    }
    case LOGIN_SUCCESSFUL: {
      return {
        isAuthChecked: true,
        data: action.payload,
        sendRequest: false,
        requestFailed: false,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...initialState,
        requestFailed: true,
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        sendRequest: true,
      };
    }
    case LOGOUT_SUCCESSFUL: {
      return {
        ...initialState,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        sendRequest: false,
        requestFailed: true,
      };
    }
    case CHECK_TOKEN_REQUEST: {
      return {
        ...state,
        sendRequest: true,
        requestFailed: false,
      };
    }
    case CHECK_TOKEN_SUCCESSFUL: {
      return {
        isAuthChecked: true,
        data: action.payload,
        sendRequest: false,
        requestFailed: false,
      };
    }
    case CHECK_TOKEN_UNSUCCESSFUL: {
      return {
        ...initialState,
        isAuthChecked: true,
      };
    }
    case CHECK_TOKEN_FAILED: {
      return {
        isAuthChecked: true,
        data: null,
        sendRequest: false,
        requestFailed: true,
      };
    }
    case UPDATE_REQUEST: {
      return {
        ...state,
        sendRequest: true,
        requestFailed: false,
      };
    }
    case UPDATE_SUCCESSFUL: {
      return {
        isAuthChecked: true,
        data: action.payload,
        sendRequest: false,
        requestFailed: false,
      };
    }
    case UPDATE_FAILED: {
      return {
        ...state,
        sendRequest: false,
        requestFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};
