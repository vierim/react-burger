import { TOrderStatus } from '../../types';

export interface IFeedUnitProps {
  id: string;
  number: number;
  updatedAt: string;
  name: string;
  price: number;
  previews: string[];
  status?: TOrderStatus;
}

export interface IFeedUnitState {
  date: string;
  previewsList: string[];
  moreIngredients: number;
}
