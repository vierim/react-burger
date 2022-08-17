import { IOrdersBoardProps } from './interface';

import styles from './orders-board.module.css';

const OrdersBoard: React.FC<IOrdersBoardProps> = (props) => {
  const { completeOrders, pendingOrders } = props;

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <h2 className="text text_type_main-medium mb-6">Готовы:</h2>
        <ul className={`${styles.column__list} ${styles.column_type_done}`}>
          {completeOrders.length > 0 &&
            completeOrders.map((order) => {
              return (
                <li key={order._id} className="text text_type_digits-default">
                  {order.number}
                </li>
              );
            })}
        </ul>
      </div>
      <div className={styles.column}>
        <h2 className="text text_type_main-medium mb-6">В работе:</h2>
        <ul className={styles.column__list}>
          {pendingOrders &&
            pendingOrders.length > 0 &&
            pendingOrders.map((order) => {
              return (
                <li key={order._id} className="text text_type_digits-default">
                  {order.number}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default OrdersBoard;
