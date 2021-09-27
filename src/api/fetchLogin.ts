import { encrypt } from '../utils/encrypt';
import { login } from './http';
import { IResponse } from '@src/api/base/types';

export interface LoginFormData {
  username: string;
  password: string;
}

export const fetchLogin = async ({
  username,
  password,
}: LoginFormData) => {
  const res = await login.post<IResponse<null>>('/api/user/login', {
    username,
    password: encrypt(password),
  });

  if (!res?.flag) {
    throw res.message;
  }
};
