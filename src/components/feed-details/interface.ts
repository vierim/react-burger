import { TFeedDetailsIngredient, TOrderStatus } from '../../types';

export interface IFeedDetailsProps {
  noModal: boolean;
}

export interface IFeedDetailsParams {
  id: string;
}

export interface IFeedDetailsState {
  number: number;
  name: string;
  status: TOrderStatus;
  ingredients: Array<TFeedDetailsIngredient>;
  updateAt: string;
  price: number;
}
