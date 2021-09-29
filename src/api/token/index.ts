import { LocalStorageKeys } from '@src/common/LocalStorageKeys';

export const getAccessToken = (): Promise<string> => {
  // TODO: 有关 accessToken
  const token = localStorage.getItem(LocalStorageKeys.A_TOKEN);
  return Promise.resolve(token || '');
};

export const setAccessToken = (token: string) => {
  localStorage.setItem(LocalStorageKeys.A_TOKEN, token);
};

export const clearAccessToken = () => {
  localStorage.removeItem(LocalStorageKeys.A_TOKEN);
};
