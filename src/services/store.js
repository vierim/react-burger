import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware } from "redux";

import { rootReducer } from "./reducers";
import socketMiddleware from "./middleware";

import {
  WS_CONNECTION_INIT,
  WS_CONNECTION_FETCHING,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
} from "./actions/orders";

const wsActions = {
  wsInit: WS_CONNECTION_INIT,
  wsFetching: WS_CONNECTION_FETCHING,
  onOpen: WS_CONNECTION_SUCCESS,
  wsClose: WS_CONNECTION_CLOSE,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_ORDERS,
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(socketMiddleware(wsActions), thunk)
);

export const store = createStore(rootReducer, enhancer);

export default store;
