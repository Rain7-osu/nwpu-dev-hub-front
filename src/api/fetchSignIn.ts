import { Group } from '../data/user';
import { encrypt } from '../utils/encrypt';
import { http } from './http';
import { IResponse } from './base/types';

export interface SignInFormData {
  username: string;
  email: string;
  password: string;
  code: string;
  group?: Group;
}

/**
 * 注册账号
 * @param params
 */
export const fetchSignIn = async (params: SignInFormData) => {
  let { password } = params;
  password = encrypt(password);

  const res = await http.post<IResponse<null>>('/api/user/register', {
    ...params,
    password,
  });

  return res?.data || res;
};
