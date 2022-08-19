import { TBurgerElements } from "../types";

export const CONFIG = {
  baseUrl: 'https://norma.nomoreparties.space/api',
  points: {
    ingredients: 'ingredients',
    orders: 'orders',
    register: 'auth/register',
    login: 'auth/login',
    logout: 'auth/logout',
    token: 'auth/token',
    user: 'auth/user',    
    passForgot: 'password-reset',
    passReset: 'password-reset/reset',
  }
}

export const BURGER_ELEMENTS: TBurgerElements = [
  { code: 'bun', name: 'Булки' },
  { code: 'main', name: 'Начинки' },
  { code: 'sauce', name: 'Соусы' }
];

export const WS_URL = {
  feed: new URL('wss://norma.nomoreparties.space/orders/all'),
  personalFeed: new URL('wss://norma.nomoreparties.space/orders'),
}

export const DAY_FORM = [
  'дней', 
  'день', 
  'дня', 
  'дня', 
  'дня', 
  'дней', 
  'дней', 
  'дней', 
  'дней', 
  'дней'
];
