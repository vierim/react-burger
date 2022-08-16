import { Link, useLocation } from 'react-router-dom';

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';

import HeaderButton from '../header-button';

import styles from './app-header.module.css';

const AppHeader = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li>
              <HeaderButton
                icon="BurgerIcon"
                text="Конструктор"
                url="/"
                exact
              />
            </li>
            <li className="ml-2">
              <HeaderButton
                icon="ListIcon"
                text="Лента заказов"
                url="/feed"
                exact
              />
            </li>
          </ul>
        </nav>
        {location.pathname !== '/' ? (
          <Link to="/">
            <Logo />
          </Link>
        ) : (
          <Logo />
        )}
        <div className={styles.rightSide}>
          <HeaderButton
            icon="ProfileIcon"
            text="Личный кабинет"
            url="/profile"
          />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
