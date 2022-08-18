import { useEffect } from 'react';
import { useSelector, useDispatch } from '../../services/store';

import { checkAuthUserThunk } from '../../services/actions/auth/thunks';

import ProfileSidebar from '../../components/profile-sidebar';
import ProfileForm from '../../components/profile-form';
import AnimatedLoader from '../../components/animated-loader';

import styles from './profile.module.css';

const Profile: React.FC = () => {
  const dispatch = useDispatch();

  const { sendRequest } = useSelector((store) => store.user);

  useEffect(() => {
    if (!sendRequest) {
      dispatch(checkAuthUserThunk());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {sendRequest && <AnimatedLoader />}

      <div className={styles.container}>
        <ProfileSidebar description="В этом разделе вы можете изменить свои персональные данные" />
        <ProfileForm />
      </div>
    </>
  );
};

export default Profile;
