import { TIngredient } from '../../types';

export interface IIngredientsListProps {
  data: TIngredient[];
  name: string;
  refLink: React.RefObject<HTMLDivElement>;
}
