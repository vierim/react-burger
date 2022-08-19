import { useEffect, useState } from 'react';
import { useParams, useLocation, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from '../../services/store';

import { TFeedDetailsIngredient } from '../../types';
import { 
  IFeedDetailsProps, 
  IFeedDetailsParams, 
  IFeedDetailsState 
} from './interface';

import { getCookie } from '../../utils/cookies';
import styledDate from '../../utils/date';
import { WS_URL } from '../../utils/constants';
import { calculateOrderCost } from '../../utils/helpers';

import {
  wsConnectionInitAction,
  wsConnectionCloseAction,
} from '../../services/actions/orders';
import { getDataThunk } from '../../services/actions/burger-ingredients/thunks';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import FeedStatus from '../feed-status';
import FeedImage from '../feed-image';

import styles from './feed-details.module.css';

const FeedDetails = (props: IFeedDetailsProps) => {
  const { noModal } = props;

  // router
  const location = useLocation();
  const match = useRouteMatch('/feed/:id');
  const { id } = useParams<IFeedDetailsParams>();

  // store
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.feed);
  const ingredientsList = useSelector((store) => store.ingredients.data);

  // state
  const [state, setState] = useState<IFeedDetailsState | undefined>(undefined);

  const getIngredientsList = (ingredients: Array<string>) => {
    const res: Array<TFeedDetailsIngredient> = [];

    ingredients.forEach((item) => {
      const itemIndex = res.findIndex((resEl) => resEl.id === item);

      if (itemIndex === -1) {
        const current = ingredientsList.find((el) => el._id === item);

        if (current) {
          res.push({
            id: current._id,
            name: current.name,
            image: current.image_mobile,
            count: 1,
            price: current.price,
          });
        }
      } else {
        const newCount = res[itemIndex].count + 1;
        res[itemIndex] = { ...res[itemIndex], count: newCount };
      }
    });

    return res;
  };

  useEffect(() => {
    if (!location.state) {
      if (match) {
        dispatch(wsConnectionInitAction(WS_URL.feed));
      } else {
        const accessToken = getCookie('token');
        const wsUrl = new URL(`${WS_URL.personalFeed}?token=${accessToken}`);

        dispatch(wsConnectionInitAction(wsUrl));
      }

      if (!ingredientsList.length) {
        dispatch(getDataThunk());
      }
    }

    return function cleanup() {
      if (!location.state) {
        dispatch(wsConnectionCloseAction());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (orders.length && ingredientsList.length) {
      const currentOrder = orders.find((item) => item._id === id);

      if (currentOrder) {
        const { number, name, status } = currentOrder;
        const updateAt = styledDate(currentOrder.updatedAt);
        const price = calculateOrderCost(
          currentOrder.ingredients,
          ingredientsList
        );
        const ingredients = getIngredientsList(currentOrder.ingredients);

        setState({
          number,
          name,
          status,
          ingredients,
          updateAt,
          price,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders, ingredientsList]);

  return (
    <div className={`${styles.container} ${noModal && 'mt-30'}`}>
      {state && (
        <>
          <p className="text text_type_digits-default mb-10">#{state.number}</p>
          <h2 className="text text_type_main-medium mb-3">{state.name}</h2>
          <div className="mb-15">
            <FeedStatus status={state.status} />
          </div>
          <h3 className="text text_type_main-medium mb-6">Состав:</h3>
          <div className={styles.ingredients + ' mb-10'}>
            <ul className={styles.list}>
              {state.ingredients.length &&
                state.ingredients.map(({ id, name, image, count, price }) => {
                  return (
                    <li key={id} className={styles.item}>
                      <FeedImage image={image} overlap={1} />
                      <p className="text text_type_main-default ml-4">{name}</p>
                      <div className={styles.summary}>
                        <div className="mr-2">
                          <p className="text text_type_digits-default">
                            {count} x {price}
                          </p>
                        </div>
                        <CurrencyIcon type="primary" />
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className={styles.bottom}>
            <p className="text text_type_main-default text_color_inactive">
              {state.updateAt}
            </p>
            <div className={styles.price}>
              <span className="text text_type_digits-default mr-2 ml-6">
                {state.price}
              </span>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FeedDetails;
