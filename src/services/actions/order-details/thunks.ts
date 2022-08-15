import {
  getDataRequestAction,
  getDataSuccessfulAction,
  getDataFailedAction
} from './';

import { AppDispatch, AppThunk } from '../../types';
import { TNewOrder } from '../../../types';

import { clearConstructorAction } from '../burger-constructor';

import { sendOrder } from '../../../utils/api';
import { logErrorToConsole } from '../../../utils/utils';

export const sendDataThunk: AppThunk = (
  burger: TNewOrder
) => (dispatch: AppDispatch) => {
    dispatch(getDataRequestAction());

    sendOrder(burger)
      .then((res) => {
        dispatch(getDataSuccessfulAction(res.order.number));
        dispatch(clearConstructorAction());
      })
      .catch((err) => {
        dispatch(getDataFailedAction());
        logErrorToConsole(err);
    });
}
