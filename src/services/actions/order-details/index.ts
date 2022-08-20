import {
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESSFUL,
  SEND_ORDER_FAILED,
  CLOSE_ORDER_POPUP
} from './constants';

import {
  ISendOrderRequestAction,
  ISendOrderSuccessfulAction,
  ISendOrderFailedAction,
  ICloseOrderPopupAction
} from './interfaces';

export const getDataRequestAction = (): ISendOrderRequestAction => ({
  type: SEND_ORDER_REQUEST
});

export const getDataSuccessfulAction = (
  data: number
): ISendOrderSuccessfulAction => ({
  type: SEND_ORDER_SUCCESSFUL,
  payload: data
});

export const getDataFailedAction = (): ISendOrderFailedAction => ({
  type: SEND_ORDER_FAILED
});

export const closeOrderPopupAction = (): ICloseOrderPopupAction => ({
  type: CLOSE_ORDER_POPUP
});
