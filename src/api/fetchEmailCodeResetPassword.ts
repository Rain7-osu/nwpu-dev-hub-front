import { http } from '@src/api/http';
import { IResponse } from '@src/api/core/types';

export interface EmailCodeFormData {
  email: string;
}

/**
 * 注册账号
 * @param params
 */
export const fetchEmailCodeResetPassword = async ({ email }: EmailCodeFormData) => {
  const res = await http.post<IResponse<null>>(`/api/user/password/email/${email}`);

  if (!res?.flag) {
    throw res.message;
  }
};