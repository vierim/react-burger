import {
  WS_CONNECTION_INIT,
  WS_CONNECTION_FETCHING,
  WS_CONNECTION_SUCCESSFUL,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
} from "./constants";

import { TFeedResponse } from "../../../types/server-response";

export interface IWsConnectionInitAction {
  readonly type: typeof WS_CONNECTION_INIT;
  readonly payload: URL;
}

export interface IWsConnectionFetchingAction {
  readonly type: typeof WS_CONNECTION_FETCHING;
}

export interface IWsConnectionSuccessfulAction {
  readonly type: typeof WS_CONNECTION_SUCCESSFUL;
  readonly payload: Event;
}

export interface IWsConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: Event;
}

export interface IWsConnectionCloseAction {
  readonly type: typeof WS_CONNECTION_CLOSE;
}

export interface IWsConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
  readonly payload: CloseEvent;
}

export interface IWsGetOrdersAction {
  readonly type: typeof WS_GET_ORDERS;
  readonly payload: TFeedResponse;
}
