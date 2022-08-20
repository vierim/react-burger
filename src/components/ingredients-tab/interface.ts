import { RefObject } from 'react';
import { TIngredientsCode } from '../../types';

export interface IIngredientsTabProps {
  code: TIngredientsCode;
  active: boolean;
  onClick: (
    code: TIngredientsCode,
    targetRef: RefObject<HTMLDivElement>
  ) => void;
  name: string;
  targetRef: RefObject<HTMLDivElement>;
}
