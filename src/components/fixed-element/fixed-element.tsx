import { useState, useEffect } from 'react';
import { useSelector } from '../../services/store';

import { IFixedElementProps, IFixedElementState } from './interface';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './fixed-element.module.css';

const FixedElements: React.FC<IFixedElementProps> = (props) => {
  const { type, positionDescribe } = props;

  const ingredients = useSelector((store) => store.ingredients.data);
  const { bun: bunId } = useSelector((store) => store.construct);

  const [state, setState] = useState<IFixedElementState | undefined>(undefined);

  useEffect(() => {
    if (ingredients.length > 0) {
      const currentFixedEl = ingredients.find((el) => el._id === bunId);

      if (currentFixedEl !== undefined) {
        setState({
          name: currentFixedEl.name,
          price: currentFixedEl.price,
          image: currentFixedEl.image,
          positionStyles: type === 'top' ? 'mb-4 pl-8 ' : 'mt-4 pl-8 ',
        });
      }
    }
  }, [type, ingredients, bunId]);

  return (
    <>
      {state && (
        <div className={state.positionStyles + styles.element}>
          <ConstructorElement
            type={type}
            isLocked={true}
            text={`${state.name} (${positionDescribe})`}
            price={state.price}
            thumbnail={state.image}
          />
        </div>
      )}
    </>
  );
};

export default FixedElements;
