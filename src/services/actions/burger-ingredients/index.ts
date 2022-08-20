import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESSFUL,
  GET_DATA_FAILED
} from './constants';

import {
  IGetDataRequestAction,
  IGetDataSuccessfulAction,
  IGetDataFailedAction
} from './interfaces';

import { TIngredient } from '../../../types';

export const getDataRequestAction = (): IGetDataRequestAction => ({
  type: GET_DATA_REQUEST
});

export const getDataSuccessfulAction = (
  data: TIngredient[]
): IGetDataSuccessfulAction => ({
  type: GET_DATA_SUCCESSFUL,
  payload: data
});

export const getDataFailedAction = (): IGetDataFailedAction => ({
  type: GET_DATA_FAILED
});
