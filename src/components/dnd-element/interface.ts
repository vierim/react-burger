import { TFindCard, TMoveCard } from "../../types";

export interface IDndElementProps {
  name: string; 
  price: number; 
  image: string; 
  uid: string; 
  findCard: TFindCard;
  moveCard: TMoveCard;
  onDelete: (uid: string) => any;
}
