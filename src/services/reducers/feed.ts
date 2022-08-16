import {
  WS_CONNECTION_FETCHING,
  WS_CONNECTION_SUCCESSFUL,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
} from "../actions/orders/constants";

import { TOrder } from '../../types'
import { TWsConnectionActions } from "../actions/orders/type";

import { compareOrdersDate } from "../../utils/helpers";

type TFeedState = {
  isFetching: boolean,
  wsConnected: boolean,
  orders: Array<TOrder>,
  total: number,
  totalToday: number,
  error: boolean | undefined,
};

const initialState: TFeedState = {
  isFetching: false,
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
  error: undefined,
};

export const feedReducer = (
  state = initialState, 
  action: TWsConnectionActions
) => {
  switch (action.type) {
    case WS_CONNECTION_FETCHING: {
      return {
        ...state,
        orders: [],
        isFetching: true,
        error: undefined,
      };
    }
    case WS_CONNECTION_SUCCESSFUL: {
      return {
        ...state,
        isFetching: false,
        wsConnected: true,
        error: undefined,
      };
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        isFetching: false,
        wsConnected: true,
        error: true,
      };
    }
    case WS_CONNECTION_CLOSED: {
      return {
        ...state,
        isFetching: false,
        orders: [],
        wsConnected: false,
        error: undefined,
      };
    }
    case WS_CONNECTION_CLOSE: {
      return {
        ...state,
        orders: [],
      };
    }
    case WS_GET_ORDERS: {
      const filteredOrders = action.payload.orders.filter((item: TOrder) => {
        return item.ingredients.every((el: string) => el !== null);
      });
      
      filteredOrders.sort(compareOrdersDate);

      return {
        ...state,
        error: undefined,
        orders: filteredOrders,
        total: action.payload.total,
        totalToday: action.payload.totalToday
      };
    }
    default:
      return state;
  }
}
