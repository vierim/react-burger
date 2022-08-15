import { sendOrder } from '../../utils/api';
import { clearConstructorAction } from './burger-constructor';
import { logErrorToConsole } from '../../utils/utils';

export const SEND_ORDER_REQUEST = 'SEND_ORDER_REQUEST';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_FAILED = 'SEND_ORDER_FAILED';
export const CLOSE_ORDER_POPUP = 'CLOSE_ORDER_POPUP';

export function sendData(burger) {
  return function (dispatch) {
    dispatch({
      type: SEND_ORDER_REQUEST,
    });

    sendOrder(burger)
      .then((res) => {
        dispatch({
          type: SEND_ORDER_SUCCESS,
          payload: res.order.number,
        });
        dispatch(clearConstructorAction());
      })
      .catch((err) => {
        dispatch({
          type: SEND_ORDER_FAILED,
        });
        logErrorToConsole(err);
      });
  };
}

export function closeOrderPopup() {
  return { 
    type: CLOSE_ORDER_POPUP
  }
}
