import { IIngredientsListProps } from './interface';

import IngredientsElement from '../ingredients-element';

import styles from './ingredients-list.module.css';

const IngredientsList: React.FC<IIngredientsListProps> = (props) => {
  const { data, name } = props;

  return (
    <div>
      <h2 className="text text_type_main-medium">{name}</h2>
      <div className={'pt-6 pr-2 pb-10 pl-4 ' + styles.container}>
        {data.map(({ _id, name, price, image }) => {
          return (
            <IngredientsElement
              key={_id}
              id={_id}
              name={name}
              price={price}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default IngredientsList;
