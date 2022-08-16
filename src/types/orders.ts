import { 
  TUser, 
  TIngredient, 
  TIngredientsId 
} from './';

export type TOrderStatus = 'created' | 'pending' | 'done' | 'cancelled';
export type TOrderStatusRus = 'Создан' | 'Готовится' | 'Выполнен' | 'Отменен';

export type TOrder = {
  readonly _id: string;
  readonly createdAt: string;
  readonly ingredients: Array<string>;
  readonly name: string;
  readonly number: number;
  readonly status: TOrderStatus;
  readonly updatedAt: string;
};

export type TCurrentOrder = Omit<TOrder, 'ingredients'> & {
  readonly ingredients: Array<TIngredient>;
  readonly price: number;
  readonly owner: TUser & {
    readonly createdAt: string;
    readonly updatedAt: string;
  };
};

export type TNewOrder = Array<TIngredientsId>;
