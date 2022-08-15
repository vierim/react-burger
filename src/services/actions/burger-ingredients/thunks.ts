import { 
  getDataRequestAction, 
  getDataSuccessfulAction, 
  getDataFailedAction
} from './';

import { AppDispatch, AppThunk } from '../../types';

import { getIngredients } from '../../../utils/api';
import { logErrorToConsole } from '../../../utils/utils';

export const getDataThunk: AppThunk =
  () => (dispatch: AppDispatch) => {
    dispatch(getDataRequestAction());

    getIngredients()
      .then((res) => {
        dispatch(getDataSuccessfulAction(res.data));
      })
      .catch((err) => { 
        dispatch(getDataFailedAction());
        logErrorToConsole(err);
      });
  };
