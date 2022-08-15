import {
  TUser,
  TUserData,
  TUserAuth,
  TUserEmail,
  TUserNewPassword,
  TUserUpdate,
} from './user';

import {
  TUserResponse,
  TAuthResponse,
  TSuccessResponse,
  TUpdateTokenResponse,
  TOrderResponse,
} from './server-response';

import { 
  TConstructorElement, 
} from './burger-constructor';

export type {
  TUser,
  TUserData,
  TUserAuth,
  TUserEmail,
  TUserNewPassword,
  TUserUpdate,
  TUserResponse,
  TAuthResponse,
  TSuccessResponse,
  TUpdateTokenResponse,
  TOrderResponse,
  TConstructorElement,
};

export type TIngredient = {
  readonly __v: number;
  readonly _id: string;
  readonly calories: number;
  readonly carbohydrates: number;
  readonly fat: number;
  readonly image: string;
  readonly image_large: string;
  readonly image_mobile: string;
  readonly name: string;
  readonly price: number;
  readonly proteins: number;
  readonly type: 'bun' | 'main' | 'sauce';
};

export type TIngredientsId = Array<string>;

export type TOrder = {
  readonly _id: string;
  readonly createdAt: string;
  readonly ingredients: Array<string>;
  readonly name: string;
  readonly number: number;
  readonly status: 'created' | 'pending' | 'done' | 'cancelled';
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

export type TFetchOpts = {
  readonly method: 'GET' | 'POST' | 'PATCH';
  readonly headers: {
    'Content-Type': 'application/json';
    readonly Authorization: string;
  };
  readonly body?: string;
};

export type TSortResult =  -1 | 0 | 1;
