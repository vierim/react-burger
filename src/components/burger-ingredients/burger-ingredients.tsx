import { useRef, useState, RefObject } from 'react';
import { useSelector } from '../../services/store';

import { TIngredientsCode } from '../../types';

import { BURGER_ELEMENTS } from '../../utils/constants';

import IngredientsList from '../ingredients-list';
import IngredientsTab from '../ingredients-tab';

import styles from './burger-ingredients.module.css';

const BurgerIngredients: React.FC = () => {
  const ingredients = useSelector((store) => store.ingredients.data);

  const [state, setState] = useState<TIngredientsCode>('bun');

  const containerRef = useRef<HTMLDivElement>(null);

  const listElements = {
    bun: useRef<HTMLDivElement>(null),
    main: useRef<HTMLDivElement>(null),
    sauce: useRef<HTMLDivElement>(null),
  };

  const handleScroll = () => {
    const containerPosition = containerRef.current?.getBoundingClientRect().top;

    const bunPosition =
      listElements['bun'].current?.getBoundingClientRect().top;
    const mainPosition =
      listElements['main'].current?.getBoundingClientRect().top;
    const saucePosition =
      listElements['sauce'].current?.getBoundingClientRect().top;

    if (containerPosition && bunPosition && mainPosition && saucePosition) {
      const elementsDiff: { name: TIngredientsCode; diff: number }[] = [
        { name: 'bun', diff: Math.abs(containerPosition - bunPosition) },
        { name: 'main', diff: Math.abs(containerPosition - mainPosition) },
        { name: 'sauce', diff: Math.abs(containerPosition - saucePosition) },
      ];

      elementsDiff.sort((a, b) => a.diff - b.diff);

      setState(elementsDiff[0].name);
    }
  };

  const handleTabClick = (
    code: TIngredientsCode,
    targetRef: RefObject<HTMLDivElement>
  ) => {
    setState(code);
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={'mr-10 pt-10 ' + styles.container}>
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>

      <div style={{ display: 'flex' }}>
        {BURGER_ELEMENTS.map((el) => (
          <IngredientsTab
            key={el.code}
            code={el.code}
            active={state === el.code}
            name={el.name}
            targetRef={listElements[el.code]}
            onClick={handleTabClick}
          />
        ))}
      </div>

      <div
        className={'mt-10 ' + styles.list}
        ref={containerRef}
        onScroll={handleScroll}
      >
        {BURGER_ELEMENTS.map((el) => {
          const list = ingredients.filter((data) => data.type === el.code);

          return (
            <IngredientsList
              key={el.name}
              data={list}
              name={el.name}
              refLink={listElements[el.code]}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BurgerIngredients;
