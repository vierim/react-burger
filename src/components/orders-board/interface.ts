import { TOrder } from "../../types";

export interface IOrdersBoardProps {
  completeOrders: Array<TOrder>;
  pendingOrders?: Array<TOrder>;
}
