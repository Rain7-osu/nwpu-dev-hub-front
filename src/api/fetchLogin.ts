import { encrypt } from '../utils/encrypt';
import { LocalStorageKeys } from '../common/LocalStorageKeys';
import { login } from './http';

export interface LoginParams {
  username: string;
  password: string;
}

export const fetchLogin = async ({
  username,
  password,
}: LoginParams) => {
  const res: Response = await login.post('/api/user/login', {
    username,
    password: encrypt(password),
  });

  const { headers } = res;
  const token = headers.get('token');
  setAccessToken(token || '');
};

const setAccessToken = (token: string) => {
  localStorage.setItem(LocalStorageKeys.A_TOKEN, token);
};
