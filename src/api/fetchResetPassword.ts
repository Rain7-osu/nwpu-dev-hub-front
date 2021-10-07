import { http } from '@src/api/http';
import { IResponse } from '@src/api/core/types';

export interface FetchResetPasswordFormData {
  email: string;
  code: string;
  newPassword: string;
}

export const fetchResetPassword = async (params: FetchResetPasswordFormData) => {
  const res = await http.post<IResponse<null>>('/api/user/password', params);

  if (!res?.flag) {
    throw res?.message || '修改密码失败';
  }
};
