import {
  SET_BUN,
  ADD_ITEM,
  REMOVE_ITEM,
  MOVE_ITEM,
  CLEAR_CONSTRUCTOR,
} from './constants';

import { TConstructorElement } from '../../../types';

export interface ISetBunAction {
  readonly type: typeof SET_BUN;
  readonly payload: string;
}

export interface IAddItemAction {
  readonly type: typeof ADD_ITEM;
  readonly payload: TConstructorElement;
}

export interface IRemoveItemAction {
  readonly type: typeof REMOVE_ITEM;
  readonly payload: string;
}

export interface IMoveItemAction {
  readonly type: typeof MOVE_ITEM;
  readonly payload: TConstructorElement[];
}

export interface IClearConstructionAction {
  readonly type: typeof CLEAR_CONSTRUCTOR;
}
