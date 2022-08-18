import { useEffect } from 'react';
import { useSelector, useDispatch } from '../../services/store';

import { WS_URL } from '../../utils/constants';
import {
  wsConnectionInitAction,
  wsConnectionCloseAction,
} from '../../services/actions/orders';

import AnimatedLoader from '../../components/animated-loader';
import ErrorNotification from '../../components/error-notification/error-notification';
import FeedList from '../../components/feed-list';
import Stats from '../../components/stats';

import styles from './order-feed.module.css';

const OrderFeed = () => {
  const dispatch = useDispatch();

  const isFetching = useSelector((store) => store.feed.isFetching);
  const orders = useSelector((store) => store.feed.orders);
  const fetchingFailed = useSelector((store) => store.feed.error);

  useEffect(() => {
    dispatch(wsConnectionInitAction(WS_URL.feed));

    return function cleanup() {
      dispatch(wsConnectionCloseAction());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isFetching && <AnimatedLoader />}
      {fetchingFailed && <ErrorNotification />}

      <div className={styles.section}>
        <h1 className={styles.title + ' text text_type_main-large'}>
          Лента заказов
        </h1>
        <div className={styles.container}>
          {orders.length > 0 ? (
            <>
              <FeedList />
              <Stats />
            </>
          ) : (
            !isFetching && (
              <p className="text text_type_main-default">
                Заказов не найдено. Попробуйте обновить страницу.
              </p>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default OrderFeed;
