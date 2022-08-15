import { TUser } from './user';
import { TCurrentOrder, TIngredient } from './index';

export type TUserResponse = {
  readonly success: boolean;
  readonly user: TUser;
};

export type TAuthResponse = TUserResponse & {
  readonly accessToken: string;
  readonly refreshToken: string;
};

export type TSuccessResponse = {
  readonly success: boolean;
  readonly message: string;
};

export type TUpdateTokenResponse = {
  readonly success: boolean;
  readonly accessToken: string;
  readonly refreshToken: string;
};

export type TOrderResponse = {
  readonly success: boolean;
  readonly name: string;
  readonly order: TCurrentOrder;
};

export type TIngredientsResponse = {
  readonly success: boolean;
  readonly data: Array<TIngredient>;
}
