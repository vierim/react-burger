import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESSFUL,
  GET_DATA_FAILED,
} from './constants';

import { TIngredient } from '../../../types';

export interface IGetDataRequestAction {
  readonly type: typeof GET_DATA_REQUEST;
}

export interface IGetDataSuccessfulAction {
  readonly type: typeof GET_DATA_SUCCESSFUL;
  readonly payload: TIngredient[];
}

export interface IGetDataFailedAction {
  readonly type: typeof GET_DATA_FAILED;
}
