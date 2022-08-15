import { CONFIG } from './constants';
import { 
  TUserData, 
  TUserAuth, 
  TAuthResponse, 
  TSuccessResponse, 
  TUserEmail, 
  TUserNewPassword, 
  TUserResponse, 
  TUserUpdate, 
  TIngredientsId,
  TOrderResponse, 
  TIngredientsResponse
} from '../types';

import { checkResponse, fetchWithRefresh } from './api-utils';
import { getCookie } from './cookies';

//API for ingredietns

export async function getIngredients(): Promise<TIngredientsResponse> {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.ingredients}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return checkResponse(res);
}

//API for users

export async function createUserAccount(
  data: TUserData
): Promise<TAuthResponse> {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.register}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return checkResponse(res);
}

export async function loginToAccount(
  data: TUserAuth
): Promise<TAuthResponse> {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.login}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return checkResponse(res);
}

export async function logoutFromAccount(
  data: Record<'token', string | null>
): Promise<TSuccessResponse> {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.logout}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return checkResponse(res);
}

export async function resetUserPassword(
  data: TUserEmail
): Promise<TSuccessResponse> {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.passForgot}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: data,
    }),
  });
  return checkResponse(res);
}

export async function updateUserPassword(
  data: TUserNewPassword
): Promise<TSuccessResponse> {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.passReset}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data }),
  });
  return checkResponse(res);
}

export async function getUserData(): Promise<TUserResponse> {
  const res = await fetchWithRefresh(
    `${CONFIG.baseUrl}/${CONFIG.points.user}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie('token')}`,
      },
    }
  );

  return checkResponse(res);
}

export async function updateUserData(
  data: TUserUpdate
): Promise<TUserResponse> {
  const res = await fetchWithRefresh(
    `${CONFIG.baseUrl}/${CONFIG.points.user}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie('token')}`,
      },
      body: JSON.stringify({ ...data }),
    }
  );

  return checkResponse(res);
}

//API for orders

export async function sendOrder(
  data: Array<TIngredientsId>
): Promise<TOrderResponse> {
  const res = await fetchWithRefresh(
    `${CONFIG.baseUrl}/${CONFIG.points.orders}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie('token')}`,
      },
      body: JSON.stringify({
        ingredients: data,
      }),
    }
  );
  
  return checkResponse(res);
}
