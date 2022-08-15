import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from "redux";

import store from '../store';
import { rootReducer } from '../reducers';

import { TAuthActions } from '../actions/auth/type';
import { TConstructorActions } from '../actions/burger-constructor/type';

type TAppActions = 
  | TAuthActions 
  | TConstructorActions;

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TAppActions>
>;

export type AppDispatch = typeof store.dispatch;
