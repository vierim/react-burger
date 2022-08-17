import { TOrderStatus } from "../../types";

export interface IFeedUnitProps {
  id: string; 
  number: number; 
  updatedAt: string; 
  name: string; 
  price: number; 
  previews: Array<string>;
  status?: TOrderStatus;
}

export interface IFeedUnitState {
  date: string;
  previewsList: Array<any>;
  moreIngredients: number;
}
