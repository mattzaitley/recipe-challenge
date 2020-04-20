import axios from 'axios';
import { ToResponse } from '../types';

export const to = (promise: Promise<any>) =>
  promise
    .then((res: Response): ToResponse<any> => [null, res])
    .catch((err: Error): ToResponse<any> => [err, null]);

export const get = (url, params = {}) =>
  new Promise((resolve, reject) =>
    axios
      .get(url, { params })
      .then((res) => {
        if (res.status !== 200 || !res.data) {
          throw new Error(res.data || 'no data');
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      }),
  );
