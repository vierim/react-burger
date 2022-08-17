import { useDrag, useDrop } from 'react-dnd';

import { IDndElementProps } from './interface';

import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './dnd-element.module.css';

const DndElement: React.FC<IDndElementProps> = (props) => {
  const { name, price, image, uid, findCard, moveCard, onDelete } = props;

  const originalIndex: any = findCard(uid).index;

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'currentBurger',
      item: { uid, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { uid: ind, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveCard(ind, originalIndex);
        }
      },
    }),
    [uid, originalIndex, moveCard]
  );

  const [, drop] = useDrop(
    (): any => ({
      accept: 'currentBurger',
      hover({ uid: draggedId }: { uid: string }) {
        if (draggedId !== uid) {
          const { index: overIndex } = findCard(uid);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard]
  );

  const opacity = isDragging ? 0 : 1;

  const handleClose = (): void => {
    onDelete(uid);
  };

  return (
    <div
      className={styles.element}
      ref={(node) => drag(drop(node))}
      style={{ opacity }}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        isLocked={false}
        text={name}
        price={price}
        thumbnail={image}
        handleClose={handleClose}
      />
    </div>
  );
};

export default DndElement;
