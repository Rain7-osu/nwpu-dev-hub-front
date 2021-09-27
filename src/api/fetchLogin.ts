import { encrypt } from '../utils/encrypt';
import { login } from './http';

export interface LoginFormData {
  username: string;
  password: string;
}

export const fetchLogin = async ({
  username,
  password,
}: LoginFormData) => {
  await login.post('/api/user/login', {
    username,
    password: encrypt(password),
  });
};
