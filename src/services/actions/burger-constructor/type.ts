import {
  ISetBunAction,
  IAddItemAction,
  IRemoveItemAction,
  IMoveItemAction,
  IClearConstructionAction,
} from './interfaces';

export type TConstructorActions =
  | ISetBunAction
  | IAddItemAction
  | IRemoveItemAction
  | IMoveItemAction
  | IClearConstructionAction;
