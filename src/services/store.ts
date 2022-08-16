import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware } from "redux";

import { rootReducer } from "./reducers";
import socketMiddleware from "./middleware";

import { wsActions } from './actions/orders/constants'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(socketMiddleware(wsActions), thunk)
);

const store = createStore(rootReducer, enhancer);

export default store;
