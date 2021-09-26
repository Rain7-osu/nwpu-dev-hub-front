import { encrypt } from '../utils/encrypt';
import { login } from './http';

export interface LoginParams {
  username: string;
  password: string;
}

export const fetchLogin = async ({
  username,
  password,
}: LoginParams) => {
  await login.post('/api/user/login', {
    username,
    password: encrypt(password),
  });
};
