import { useSelector } from '../../services/store';

import doneIconPath from '../../images/done.svg';
import styles from './order-details.module.css';

const OrderDetails: React.FC = () => {
  const { number, sendRequest, requestFailed } = useSelector(
    (store) => store.order
  );

  return (
    <div className={styles.container + ' mt-20 mb-15'}>
      {sendRequest && !requestFailed && (
        <h3 className="text text_type_main-medium mb-15">
          Отправляем заказ...
        </h3>
      )}
      {!sendRequest && !requestFailed && (
        <>
          <h2
            className={styles.orderNumber + ' text text_type_digits-large mb-8'}
          >
            {number}
          </h2>
          <h3 className="text text_type_main-medium mb-15">
            идентификатор заказа
          </h3>
          <img className={styles.image} src={doneIconPath} alt=""></img>
          <p className="text text_type_main-default mb-2">
            Ваш заказ начали готовить
          </p>
          <p className={styles.waitFor + ' text text_type_main-default'}>
            Дождитесь готовности на орбитальной станции
          </p>
        </>
      )}
      {!sendRequest && requestFailed && (
        <h3 className="text text_type_main-medium mb-15">
          При отправке заказа возникла межгалактическая ошибка. Попробуйте еще
          раз.
        </h3>
      )}
    </div>
  );
};

export default OrderDetails;
