import React from 'react';
import { useSelector, useDispatch } from '../../services/store';
import { useHistory } from 'react-router-dom';

import { sendDataThunk } from '../../services/actions/order-details/thunks';

import BurgerElements from '../burger-elements';
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';

const BurgerConstructor: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const ingredients = useSelector((store) => store.ingredients.data);
  const { bun, items } = useSelector((store) => store.construct);
  const user = useSelector((store) => store.user);

  const burgerPrice = React.useMemo(() => {
    let price = 0;

    const bunEl = ingredients.find((el) => el._id === bun);
    if (bunEl) {
      price += bunEl.price * 2;
    }

    items.forEach((item) => {
      const itemEl = ingredients.find((el) => el._id === item.id);
      if (itemEl) {
        price += itemEl.price;
      }
    });

    return price;
  }, [bun, items, ingredients]);

  const handleOrderButtonClick = () => {
    if (user?.data) {
      const ingred = items.map((item) => item.id);
      dispatch(sendDataThunk([bun, ...ingred, bun]));
    } else {
      history.push('/login');
    }
  };

  return (
    <section className={'pt-25 pl-4 pr-4 ' + styles.BurgerConstructor}>
      <BurgerElements />

      <div className={'mt-10 pr-4 ' + styles.orderSection}>
        {burgerPrice > 0 ? (
          <>
            <div className={'mr-10 ' + styles.priceContainer}>
              <p className={'text text_type_digits-medium ' + styles.price}>
                {burgerPrice ? burgerPrice : ''}
              </p>
              <CurrencyIcon type="primary" />
            </div>
            <Button
              type="primary"
              size="large"
              onClick={handleOrderButtonClick}
            >
              Оформить заказ
            </Button>
          </>
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default BurgerConstructor;
