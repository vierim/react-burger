import {
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESSFUL,
  SEND_ORDER_FAILED,
  CLOSE_ORDER_POPUP
} from './constants';

export interface ISendOrderRequestAction {
  readonly type: typeof SEND_ORDER_REQUEST;
}

export interface ISendOrderSuccessfulAction {
  readonly type: typeof SEND_ORDER_SUCCESSFUL;
  readonly payload: number;
}

export interface ISendOrderFailedAction {
  readonly type: typeof SEND_ORDER_FAILED;
}

export interface ICloseOrderPopupAction {
  readonly type: typeof CLOSE_ORDER_POPUP;
}
