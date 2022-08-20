import {
  IWsConnectionInitAction,
  IWsConnectionFetchingAction,
  IWsConnectionSuccessfulAction,
  IWsConnectionErrorAction,
  IWsConnectionCloseAction,
  IWsConnectionClosedAction,
  IWsGetOrdersAction
} from './interfaces';

export type TWsConnectionActions =
  | IWsConnectionInitAction
  | IWsConnectionFetchingAction
  | IWsConnectionSuccessfulAction
  | IWsConnectionErrorAction
  | IWsConnectionCloseAction
  | IWsConnectionClosedAction
  | IWsGetOrdersAction;
