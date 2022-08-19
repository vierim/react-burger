import { TConstructorElement } from ".";

export type TFindCard = (id: string) => {
  searchItem: TConstructorElement;
  index: number;
};

export type TMoveCard = (draggedId: string, overIndex: number) => void;
