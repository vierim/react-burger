import { IIngredientsTabProps } from './interface';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientsTab: React.FC<IIngredientsTabProps> = (props) => {
  const { code, active, onClick, name, targetRef } = props;

  return (
    <Tab 
      value={code} 
      active={active} 
      onClick={() => 
        onClick(code, targetRef)
      }
    >
      {name}
    </Tab>
  );
};

export default IngredientsTab;
