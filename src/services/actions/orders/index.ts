import {
  WS_CONNECTION_INIT,
  WS_CONNECTION_FETCHING,
  WS_CONNECTION_SUCCESSFUL,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
} from './constants';

import {
  IWsConnectionInitAction,
  IWsConnectionFetchingAction,
  IWsConnectionSuccessfulAction,
  IWsConnectionErrorAction,
  IWsConnectionCloseAction,
  IWsConnectionClosedAction,
  IWsGetOrdersAction,
} from './interfaces';

import { TFeedResponse } from '../../../types/server-response';

export const wsConnectionInitAction = (
  url: string
): IWsConnectionInitAction => ({
  type: WS_CONNECTION_INIT,
  payload: url,
});

export const wsConnectionFetchingAction = (): IWsConnectionFetchingAction => ({
  type: WS_CONNECTION_FETCHING,
});

export const wsConnectionSuccessfulAction = (
  evt: Event
): IWsConnectionSuccessfulAction => ({
  type: WS_CONNECTION_SUCCESSFUL,
  payload: evt,
});

export const wsConnectionErrorAction = (
  evt: Event
): IWsConnectionErrorAction => ({
  type: WS_CONNECTION_ERROR,
  payload: evt,
});

export const wsConnectionCloseAction = (): IWsConnectionCloseAction => ({
  type: WS_CONNECTION_CLOSE,
});

export const wsConnectionClosedAction = (
  evt: CloseEvent
): IWsConnectionClosedAction => ({
  type: WS_CONNECTION_CLOSED,
  payload: evt,
});

export const wsGetOrdersAction = (
  data: TFeedResponse
): IWsGetOrdersAction => ({
  type: WS_GET_ORDERS,
  payload: data,
});
