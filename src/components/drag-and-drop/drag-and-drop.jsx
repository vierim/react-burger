import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';

import { removeItemAction, moveItemAction } from '../../services/actions/burger-constructor';

import DndElement from '../dnd-element';

import styles from './drag-and-drop.module.css';

const DragAndDrop = () => {
  
  const dispatch = useDispatch();

  const ingredients = useSelector((state) => state.ingredients.data);
  const { items } = useSelector((state) => state.construct);

  const handleDelete = (uid) => dispatch(removeItemAction(uid));

  const findCard = useCallback(
    (id) => {
      const searchItem = items.filter((item) => item.uid === id)[0];
      const searchItemIndex = items.indexOf(searchItem);

      return {
        searchItem,
        index: searchItemIndex,
      };
    },
    [items]
  );

  const moveCard = useCallback(
    (draggedId, overIndex) => {
      const { index } = findCard(draggedId);

      const newSortItems = items.slice();
      newSortItems.splice(index, 1);
      newSortItems.splice(overIndex, 0, items[index]);

      dispatch(moveItemAction(newSortItems));
    },
    [findCard, items, dispatch]
  );

  const [, drop] = useDrop(() => ({ accept: 'currentBurger' }));

  return (
    <div className={styles.container} ref={drop}>
      {items.map((item) => {
        const { name, price, image } = ingredients.find((el) => el._id === item.id);

        return (
          <DndElement
            key={item.uid}
            uid={item.uid}
            name={name}
            price={price}
            image={image}
            findCard={findCard}
            moveCard={moveCard}
            onDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default DragAndDrop;
