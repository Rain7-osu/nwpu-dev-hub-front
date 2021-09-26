import { http } from '@src/api/http';
import { IResponse } from '@src/api/base/types';

export interface FetchEmailCodeSignInParams {
  email: string;
}

/**
 * 注册账号
 * @param params
 */
export const fetchEmailCodeSignIn = async ({ email }: FetchEmailCodeSignInParams) => {
  const res = await http.post<IResponse<null>>(`/api/user/register/email/${email}`);
  console.log(res);

  return res?.data || res;
};
