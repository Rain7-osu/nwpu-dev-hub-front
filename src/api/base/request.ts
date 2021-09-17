import qs from 'qs';

export interface IParams {
  [key: string]: any;
}

export interface IBody {
  [key: string]: any;
}

export interface IHeaders {
  [key: string]: any;
}

export interface IResponse<T> {
  flag: boolean;
  code: number;
  message: string;
  data: T;
}

const defaultHeaders = {
  'content-type': 'application/json',
};

// TODO: 由于时间比较赶，所以没有进行二层封装，后期把异常先拦截
// 以及，后期用 对象参数
export const request = {
  post: async <T>(
    path: string,
    params: IParams = {},
    body: IBody = {},
    headers: IHeaders = defaultHeaders,
  ): Promise<T> => {
    const query = qs.stringify(params);
    const url = `${path}${query.length > 0 ? `?${query}` : ''}`;
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
      mode: 'cors',
    });
    const json = await response.json();
    return json as T;
  },
  get: async <T>(path: string, params: IParams = {}, headers: IHeaders = defaultHeaders): Promise<T> => {
    const query = qs.stringify(params);
    const url = `${path}${query.length > 0 ? `?${query}` : ''}`;
    const response = await fetch(url, {
      method: 'GET',
      headers,
      mode: 'cors',
    });
    const json = await response.json();
    return json as T;
  },
};
