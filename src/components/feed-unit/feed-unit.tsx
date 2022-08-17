import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { IFeedUnitProps, IFeedUnitState } from './interface';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import FeedStatus from '../feed-status';
import FeedImage from '../feed-image';

import styledDate from '../../utils/date';

import styles from './feed-unit.module.css';

const FeedUnit: React.FC<IFeedUnitProps> = (props) => {
  const { id, number, updatedAt, name, price, previews, status } = props;

  const location = useLocation();
  const history = useHistory();
  const { pathname } = location;

  const [state, setState] = useState<IFeedUnitState | undefined>();

  useEffect(() => {
    const styledUpdateAt = styledDate(updatedAt);
    const previewsList = previews.slice(0, 6);
    const moreIngredients = previews.length - previewsList.length;

    setState({
      date: styledUpdateAt,
      previewsList,
      moreIngredients,
    });
  }, [updatedAt, previews]);

  return (
    <li
      className={styles.item + ' p-6'}
      onClick={() =>
        history.push(`${pathname}/${id}`, { background: location })
      }
    >
      <div className={styles.details}>
        <p className="text text_type_digits-default">#{number}</p>
        <p className="text text_type_main-default text_color_inactive">
          {state?.date}
        </p>
      </div>
      <div>
        <h2 className="text text_type_main-medium">{name}</h2>
        {status && (
          <div className="mt-2">
            <FeedStatus status={status} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.ingredients}>
          {state?.previewsList.map((item, index) => {
            const overlap = state.previewsList.length - index;

            if (
              index === state.previewsList.length - 1 &&
              state.moreIngredients > 0
            ) {
              return (
                <FeedImage
                  key={index}
                  image={item}
                  more={state.moreIngredients}
                  overlap={overlap}
                />
              );
            }

            return <FeedImage key={index} image={item} overlap={overlap} />;
          })}
        </div>
        <div className={styles.price}>
          <span className="text text_type_digits-default mr-2 ml-6">
            {price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  );
};

export default FeedUnit;
