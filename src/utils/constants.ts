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

export const BASIC_TYPES = {
  bun: 'Булки',
  main: 'Начинки',
  sauce: 'Соусы'
}

export const WS_URL = {
  feed: 'wss://norma.nomoreparties.space/orders/all',
  personalFeed: 'wss://norma.nomoreparties.space/orders',
}

export const DAY_FORM = ['дней', 'день', 'дня', 'дня', 'дня', 'дней', 'дней', 'дней', 'дней', 'дней'];
