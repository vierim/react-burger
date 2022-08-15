import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

import { sendLogoutRequestThunk } from "../../services/actions/auth/thunks";

import styles from "./profile-sidebar.module.css";

const ProfileSidebar = ({ description }) => {

  const dispatch = useDispatch();

  const handleLogoutClick = (e) => {
    e.preventDefault();
    dispatch(sendLogoutRequestThunk());
  };

  return (
    <div className={"mr-15 mt-30 " + styles.navigation}>
      <ul className={styles.linkList}>
        <li className={styles.listItem}>
          <NavLink
            className={
              styles.link + " text text_type_main-medium text_color_inactive"
            }
            to="/profile"
            activeClassName={styles.active}
            exact
          >
            Профиль
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            className={
              styles.link + " text text_type_main-medium text_color_inactive"
            }
            to="/profile/orders"
            activeClassName={styles.active}
            exact
          >
            История заказов
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <Link
            className={
              styles.link + " text text_type_main-medium text_color_inactive"
            }
            onClick={handleLogoutClick}
            to="/logout"
          >
            Выход
          </Link>
        </li>
      </ul>
      <p className="text text_type_main-default text_color_inactive">
        {description}
      </p>
    </div>
  );
};

ProfileSidebar.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ProfileSidebar;
