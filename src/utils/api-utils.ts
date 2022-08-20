import { CONFIG } from './constants';
import { getCookie, setCookie } from './cookies';
import { TFetchOpts, TUpdateTokenResponse } from '../types';

export const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : Promise.reject(res);

export const fetchWithRefresh = async (
  url: string,
  opts: TFetchOpts
): Promise<Response> => {
  if (!getCookie('token') && localStorage.getItem('refreshToken') === null) {
    return Promise.reject('401 Unauthorized');
  }

  try {
    if (!getCookie('token')) {
      throw new Error('accessToken is empty');
    }
    const res = await fetch(url, opts);

    if (!res.ok) {
      throw res;
    }

    return res;
  } catch (err: unknown) {
    let errorResponse;

    if (err instanceof Error) {
      errorResponse = {
        message: err.message,
      };
    }

    if (err instanceof Response) {
      errorResponse = await err.json();
    }

    if (
      errorResponse.message === 'jwt expired' ||
      errorResponse.message === 'accessToken is empty'
    ) {
      const renewTokens = await getNewToken();

      if (!renewTokens.success) {
        return Promise.reject(renewTokens);
      } else {
        localStorage.setItem('refreshToken', renewTokens.refreshToken);
        setCookie('token', renewTokens.accessToken.split('Bearer ')[1]);

        const res = await fetch(url, {
          ...opts,
          headers: {
            ...opts.headers,
            Authorization: renewTokens.accessToken,
          },
        });

        return res;
      }
    } else {
      return Promise.reject(err);
    }
  }
};

async function getNewToken(): Promise<TUpdateTokenResponse> {
  const res = await fetch(`${CONFIG.baseUrl}/${CONFIG.points.token}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken'),
    }),
  });

  return checkResponse(res);
}

export async function refreshToken() {
  const renewTokens = await getNewToken();

  if (!renewTokens.success) {
    return Promise.reject(renewTokens);
  } else {
    localStorage.setItem('refreshToken', renewTokens.refreshToken);
    setCookie('token', renewTokens.accessToken.split('Bearer ')[1]);

    return Promise.resolve(renewTokens);
  }
}
