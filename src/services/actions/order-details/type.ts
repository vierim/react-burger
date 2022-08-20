import {
  ISendOrderRequestAction,
  ISendOrderSuccessfulAction,
  ISendOrderFailedAction,
  ICloseOrderPopupAction
} from './interfaces';

export type TOrderDetailsActions =
  | ISendOrderRequestAction
  | ISendOrderSuccessfulAction
  | ISendOrderFailedAction
  | ICloseOrderPopupAction;
