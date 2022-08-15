import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESSFUL,
  GET_DATA_FAILED
} from '../actions/burger-ingredients/constants';

import { TIngredientsActions } from '../actions/burger-ingredients/type';
import { TIngredient } from '../../types';

type TIngredientsState = {
  data: Array<TIngredient>,
  dataRequest: boolean,
  dataFailed: boolean,
};

const initialState: TIngredientsState = {
  data: [],
  dataRequest: false,
  dataFailed: false,
};

export const burgerIngredientsReducer = (
  state = initialState, 
  action: TIngredientsActions
) => {
  switch (action.type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        dataRequest: true,
        dataFailed: false
      };
    }
    case GET_DATA_SUCCESSFUL: {
      return { 
        data: [...state.data, ...action.payload], 
        dataRequest: false,
        dataFailed: false
      };
    }
    case GET_DATA_FAILED: {
      return { 
        ...state,
        dataRequest: false, 
        dataFailed: true
      };
    }
    default: {
      return state;
    }
  }
};
