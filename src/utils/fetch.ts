import fetch from 'isomorphic-fetch';
import qs from 'qs';
import { ToResponse } from '../types';

const makeFetch = (url: string, req: RequestInit) =>
  new Promise((resolve, reject) => {
    fetch(url, {
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      ...req,
    })
      .then((res: Response) => {
        if (!res.ok) {
          return res.json().then((err: Error) => {
            reject(err);
          });
        }
        return res.json();
      })
      .then((body) => resolve(body))
      .catch((error: Error) => reject(error));
  });

export function get(
  url: string,
  queryParams?: { [key: string]: any },
): Promise<unknown> {
  const queryString = qs.stringify(queryParams);
  const fullUrl = queryString ? `${url}?${queryString}` : url;
  return makeFetch(fullUrl, {
    method: 'get',
  });
}

export function post(url: string, payload: {}): Promise<unknown> {
  return makeFetch(url, {
    method: 'post',
    body: JSON.stringify(payload),
  });
}

export function put(url: string, payload: {}): Promise<unknown> {
  return makeFetch(url, {
    method: 'put',
    body: JSON.stringify(payload),
  });
}

export function remove(url: string, payload: {}): Promise<unknown> {
  return makeFetch(url, {
    method: 'delete',
    body: JSON.stringify(payload),
  });
}

export const to = (promise: Promise<any>) =>
  promise
    .then((res: Response): ToResponse<any> => [null, res])
    .catch((err: Error): ToResponse<any> => [err, null]);
