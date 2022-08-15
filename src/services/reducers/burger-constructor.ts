import {
  SET_BUN,
  ADD_ITEM,
  REMOVE_ITEM,
  MOVE_ITEM,
  CLEAR_CONSTRUCTOR,
} from '../actions/burger-constructor/constants';

import { TConstructorActions } from '../actions/burger-constructor/type';
import { TConstructorElement } from '../../types';

type TConstructorState = {
  bun: string;
  items: Array<TConstructorElement>;
};

const initialState: TConstructorState = {
  bun: '',
  items: [],
};

export const burgerConstructorReducer = (
  state = initialState,
  action: TConstructorActions
) => {
  switch (action.type) {
    case SET_BUN: {
      return {
        ...state,
        bun: action.payload,
      };
    }
    case ADD_ITEM: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        items: state.items.filter((item) => item.uid !== action.payload),
      };
    }
    case MOVE_ITEM: {
      return {
        ...state,
        items: action.payload,
      };
    }
    case CLEAR_CONSTRUCTOR: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
