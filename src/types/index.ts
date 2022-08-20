import {
  TUser,
  TUserData,
  TUserAuth,
  TUserEmail,
  TUserNewPassword,
  TUserUpdate,
} from './user';

import {
  TOrderStatus,
  TOrderStatusRus,
  TOrder,
  TCurrentOrder,
  TNewOrder
} from './orders';

import {
  TUserResponse,
  TAuthResponse,
  TSuccessResponse,
  TUpdateTokenResponse,
  TOrderResponse,
  TIngredientsResponse,
} from './server-response';

import { 
  TConstructorElement, 
} from './burger-constructor';

import { 
  TFindCard, 
  TMoveCard,
} from './drag-n-drop';

export type {
  TUser,
  TUserData,
  TUserAuth,
  TUserEmail,
  TUserNewPassword,
  TUserUpdate,
  TOrderStatus,
  TOrderStatusRus,
  TOrder,
  TCurrentOrder,
  TNewOrder,
  TUserResponse,
  TAuthResponse,
  TSuccessResponse,
  TUpdateTokenResponse,
  TOrderResponse,
  TConstructorElement,
  TIngredientsResponse,
  TFindCard, 
  TMoveCard,
};

export type TIngredientsCode = 'bun' | 'main' | 'sauce';

export type TBurgerElements = {
  code: TIngredientsCode;
  name: string;
}[];

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
  readonly type: TIngredientsCode;
};

export type TIngredientsId = string[];

export type TFeedDetailsIngredient = {
  id: string;
  name: string;
  image: string;
  count: number;
  price: number;
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

export type TWsActionsMethods = {
  init: string;
  fetching: string;
  close: string;
  onOpen: string;
  onClose: string;
  onError: string;
  onMessage: string;
};

export type TBackground = {
  pathname: string;
  search: string;
  hash: string;
  state: null | undefined;
  key: string;
}
