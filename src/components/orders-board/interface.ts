import { TOrder } from '../../types';

export interface IOrdersBoardProps {
  completeOrders: TOrder[];
  pendingOrders?: TOrder[];
}
