import { useEffect } from 'react';
import { useSelector, useDispatch } from '../../services/store';

import { getDataThunk } from '../../services/actions/burger-ingredients/thunks';
import { calculateOrderCost, getPreviewsList } from '../../utils/helpers';

import FeedUnit from '../feed-unit';

import styles from './feed-list.module.css';

const FeedList: React.FC = () => {
  const dispatch = useDispatch();

  const orders = useSelector((store) => store.feed.orders);
  const ingredientsList = useSelector((store) => store.ingredients.data);

  useEffect(() => {
    if (!ingredientsList.length) dispatch(getDataThunk());
  }, [ingredientsList, dispatch]);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {orders.length > 0 &&
          ingredientsList.length > 0 &&
          orders.map(({ _id, ingredients, name, number, updatedAt }) => {
            const price = calculateOrderCost(ingredients, ingredientsList);
            const previews = getPreviewsList(ingredients, ingredientsList);

            return (
              <FeedUnit
                key={_id}
                id={_id}
                name={name}
                number={number}
                price={price}
                updatedAt={updatedAt}
                previews={previews}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default FeedList;
