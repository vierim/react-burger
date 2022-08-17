import { useEffect } from 'react';
import { useSelector, useDispatch } from '../../services/store';

import { getDataThunk } from '../../services/actions/burger-ingredients/thunks';
import { calculateOrderCost, getPreviewsList } from '../../utils/helpers';

import FeedUnit from '../feed-unit';

import styles from './profile-feed.module.css';

const ProfileFeed: React.FC = () => {
  const dispatch = useDispatch();

  const orders = useSelector((store) => store.feed.orders);
  const ingredientsList = useSelector((store) => store.ingredients.data);

  useEffect(() => {
    if (!ingredientsList.length) dispatch(getDataThunk());
  }, [ingredientsList, dispatch]);

  return (
    <div className={'mt-10 ' + styles.container}>
      <ul className={styles.list}>
        {orders.length > 0 &&
          ingredientsList.length > 0 &&
          orders.map(
            ({ _id, ingredients, name, number, updatedAt, status }) => {
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
                  status={status}
                />
              );
            }
          )}
      </ul>
    </div>
  );
};

export default ProfileFeed;
