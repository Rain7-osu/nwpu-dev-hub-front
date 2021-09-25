import { LocalStorageKeys } from '../../common/LocalStorageKeys';
import type { HttpInstance, RequestInterceptor, ResponseInterceptor } from './request';
import { baseHttpFactory } from './request';

export type RequestOnFulfilled = RequestInterceptor[0];
export type RequestOnRejected = RequestInterceptor[1];
export type ResponseOnFulfilled = ResponseInterceptor[0];
export type ResponseOnRejected = ResponseInterceptor[1];

/**
 * 登录系列 api 调用的请求工厂，附带 token
 * 包括，login, register, changePassword
 */
export const loginFactory = () => {
  return baseHttpFactory<HttpInstance>({
    responseInterceptor: [httpResponseInterceptorFactory()],
  });
};

export const httpFactory = () => {
  return baseHttpFactory<HttpInstance>({
    requestInterceptor: [httpRequestInterceptorFactory()],
    responseInterceptor: [httpResponseInterceptorFactory()],
  });
};

const httpRequestInterceptorFactory = () => {
  const onFulfilled: RequestOnFulfilled = async (config) => {
    const { headers } = config;

    const token = await getAccessToken();

    return {
      ...config,
      headers: {
        ...headers,
        token,
      },
    };
  };

  return [onFulfilled] as RequestInterceptor;
};

const httpResponseInterceptorFactory = () => {
  const onFulfilled: ResponseOnFulfilled = async (res) => {
    return res ? res.data : res;
  };

  const onRejected: ResponseOnRejected = async (err) => {
    return Promise.resolve(err.response);
  };

  return [onFulfilled, onRejected] as ResponseInterceptor;
};

const getAccessToken = (): Promise<string> => {
  // TODO: 有关 accessToken
  const token = localStorage.getItem(LocalStorageKeys.A_TOKEN);
  return Promise.resolve(token || '');
};
