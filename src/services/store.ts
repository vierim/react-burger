import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux';

import { RootState, AppDispatch, AppThunk } from './types';
import { rootReducer } from './reducers';
import socketMiddleware from './middleware';

import { wsActions } from './actions/orders/constants';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(socketMiddleware(wsActions), thunk)
);

const store = createStore(rootReducer, enhancer);
export default store;

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();
