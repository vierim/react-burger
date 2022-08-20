import { useEffect } from 'react';
import { useSelector, useDispatch } from '../../services/store';

import { getCookie } from '../../utils/cookies';

import { WS_URL } from '../../utils/constants';
import {
  wsConnectionInitAction,
  wsConnectionCloseAction,
} from '../../services/actions/orders';

import ProfileSidebar from '../../components/profile-sidebar';
import ProfileFeed from '../../components/profile-feed';
import AnimatedLoader from '../../components/animated-loader';

import styles from './profile-orders.module.css';

const ProfileOrders: React.FC = () => {
  const dispatch = useDispatch();

  const { isFetching, orders } = useSelector((store) => store.feed);
  const { sendRequest } = useSelector((store) => store.user);

  useEffect(() => {
    const accessToken = getCookie('token');
    const wsUrl = new URL(`${WS_URL.personalFeed}?token=${accessToken}`);

    dispatch(wsConnectionInitAction(wsUrl));

    return function cleanup() {
      dispatch(wsConnectionCloseAction());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {(sendRequest || isFetching) && <AnimatedLoader />}

      <div className={styles.container}>
        <ProfileSidebar description="В этом разделе вы можете посмотреть свою историю заказов" />
        {orders.length > 0 && <ProfileFeed />}
      </div>
    </>
  );
};

export default ProfileOrders;
