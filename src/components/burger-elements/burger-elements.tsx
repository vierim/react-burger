import { useSelector, useDispatch } from '../../services/store';
import { useDrop } from 'react-dnd';

import { v4 as uuidv4 } from 'uuid';

import {
  setBunAction,
  addItemAction,
} from '../../services/actions/burger-constructor';

import FixedElement from '../fixed-element';
import DragAndDrop from '../drag-and-drop';
import StartPrompting from '../start-prompting';

import styles from './burger-elements.module.css';

const BurgerElements = () => {
  const dispatch = useDispatch();

  const ingredients = useSelector((store) => store.ingredients.data);
  const { bun, items } = useSelector((store) => store.construct);

  const addBurgerIngredient = (id: any): void => {
    if (ingredients && ingredients.length > 0) {
      const current = ingredients.find((el) => el._id === id);

      if (current) {
        if (current.type === 'bun') {
          dispatch(setBunAction(id));
        } else {
          if (bun.length > 0) {
            const uid = uuidv4();
            dispatch(addItemAction({ id, uid }));
          }
        }
      }
    }
  };

  const [, dropTarget] = useDrop({
    accept: 'ingredients',
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item: any) {
      addBurgerIngredient(item.id);
    },
  });

  return (
    <div ref={dropTarget} className={styles.container}>
      {bun.length > 0 ? (
        <>
          <FixedElement type="top" positionDescribe="верх" />
          {items.length > 0 && <DragAndDrop />}
          <FixedElement type="bottom" positionDescribe="низ" />
        </>
      ) : (
        <StartPrompting />
      )}
    </div>
  );
};

export default BurgerElements;
