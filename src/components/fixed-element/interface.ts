export interface IFixedElementProps {
  type: 'top' | 'bottom' | undefined;
  positionDescribe: string;
}

export interface IFixedElementState {
  name: string;
  price: number;
  image: string;
  positionStyles: string;
}
