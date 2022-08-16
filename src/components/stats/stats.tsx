import { useEffect, useState } from 'react';
import { useSelector } from '../../services/store';
import { TOrder } from '../../types';

import OrdersBoard from '../orders-board';
import OrdersCompleted from '../orders-completed';

import styles from './stats.module.css';

const Stats = () => {
  const { orders, total, totalToday } = useSelector((store) => store.feed);

  const [completeOrders, setCompleteOrders] = useState<TOrder[]>([]);
  const [pendingOrders, setPendingOrders] = useState<TOrder[]>([]);

  useEffect(() => {
    if (orders.length) {
      const completeOrders = orders.filter((item, index) => {
        return item.status === 'done' && index < 20;
      });
      setCompleteOrders(completeOrders);

      const pendingOrders = orders.filter((item, index) => {
        return item.status === 'pending' && index < 20;
      });
      setPendingOrders(pendingOrders);
    }
  }, [orders]);

  return (
    <div className={styles.container}>
      <OrdersBoard
        completeOrders={completeOrders}
        pendingOrders={pendingOrders}
      />
      <OrdersCompleted period="ever" count={total} />
      <OrdersCompleted period="today" count={totalToday} />
    </div>
  );
};

export default Stats;
