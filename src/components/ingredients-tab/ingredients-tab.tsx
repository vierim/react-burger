import { IIngredientsTabProps } from './interface';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientsTab: React.FC<IIngredientsTabProps> = (props) => {
  const { code, active, onClick, name } = props;

  return (
    <Tab value={code} active={active} onClick={() => onClick(code)}>
      {name}
    </Tab>
  );
};

export default IngredientsTab;
