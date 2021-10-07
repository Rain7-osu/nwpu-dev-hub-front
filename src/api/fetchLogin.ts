import { encrypt } from '../utils/encrypt';
import { login } from './http';
import { IResponse } from '@src/api/core/types';
import { Group, Role } from '@src/data/user';

export interface LoginFormData {
  username: string;
  password: string;
}

export interface LoginResponseData {
  username: string,
  role: Role,
  email: string,
  groupId: Group | null,
  avatar: string | null,
}

export const fetchLogin = async ({
  username,
  password,
}: LoginFormData) => {
  const res = await login.post<IResponse<LoginResponseData>>('/api/user/login', {
    username,
    password: encrypt(password),
  });

  if (!res?.flag) {
    throw res.message;
  }

  return res.data;
};
