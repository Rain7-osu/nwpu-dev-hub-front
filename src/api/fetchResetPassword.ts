import { http } from '@src/api/http';
import { IResponse } from '@src/api/core/types';
import { encrypt } from '@src/utils/encrypt';

export interface FetchResetPasswordFormData {
  email: string;
  code: string;
  newPassword: string;
}

export const fetchResetPassword = async (params: FetchResetPasswordFormData) => {
  const res = await http.post<IResponse<null>>('/api/user/password', {
    ...params,
    newPassword: encrypt(params.newPassword),
  });

  if (!res?.flag) {
    throw res?.message || '修改密码失败';
  }
};
