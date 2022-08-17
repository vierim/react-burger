import { TOrderStatus, TOrderStatusRus } from '../../types';

export interface IFeedStatusProps {
  status: TOrderStatus;
}

export interface IFeedStatusState {
  statusText: TOrderStatusRus;
  statusColor: string;
}
