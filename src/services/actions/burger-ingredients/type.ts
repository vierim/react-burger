import {
  IGetDataRequestAction,
  IGetDataSuccessfulAction,
  IGetDataFailedAction
} from './interfaces';

export type TIngredientsActions =
  | IGetDataRequestAction
  | IGetDataSuccessfulAction
  | IGetDataFailedAction;
