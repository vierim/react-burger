import { useSelector } from '../../services/store';

import { BURGER_ELEMENTS } from '../../utils/constants';

import IngredientsList from '../ingredients-list';
import IngredientsTab from '../ingredients-tab';

import styles from './burger-ingredients.module.css';

const BurgerIngredients: React.FC = () => {

  const ingredients = useSelector((store) => store.ingredients.data);

  const handleTabClick = (value: any) => {

  };

  return (
    <section className={'mr-10 pt-10 ' + styles.container}>
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>

      <div style={{ display: 'flex' }}>
        {BURGER_ELEMENTS.map((el) => (
          <IngredientsTab
            key={el.code}
            code={el.code}
            active={false}
            name={el.name}
            onClick={handleTabClick}
          />
        ))}
      </div>

      <div className={'mt-10 ' + styles.list}>
        {BURGER_ELEMENTS.map((el) => {
          const list = ingredients.filter((data) => data.type === el.code);

          return <IngredientsList data={list} name={el.name} />;
        })}
      </div>
    </section>
  );
};

export default BurgerIngredients;
