import {
  SET_BUN,
  ADD_ITEM,
  REMOVE_ITEM,
  MOVE_ITEM,
  CLEAR_CONSTRUCTOR,
} from './constants';

import {
  ISetBunAction,
  IAddItemAction,
  IRemoveItemAction,
  IMoveItemAction,
  IClearConstructionAction,
} from './interfaces';

import { TConstructorElement } from '../../../types';

export const setBunAction = (
  id: string
): ISetBunAction => ({
  type: SET_BUN,
  payload: id
});

export const addItemAction = (
  item: TConstructorElement
): IAddItemAction => ({
  type: ADD_ITEM,
  payload: {...item}
});

export const removeItemAction = (
  uid: string
): IRemoveItemAction => ({
  type: REMOVE_ITEM,
  payload: uid
});

export const moveItemAction = (
  items: TConstructorElement[]
): IMoveItemAction => ({
  type: MOVE_ITEM,
  payload: items
});

export const clearConstructorAction = (): IClearConstructionAction => ({
  type: CLEAR_CONSTRUCTOR
});
