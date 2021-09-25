import { Intention } from '../pages/JoinUs/Register';
import { IResponse } from './base/types';
import { http } from './http';

export interface FetchEmailCodeParams {
  email: string;
  name?: string;
  willGroup?: Intention,
}

export async function fetchEmailCode({
  email,
  name,
  willGroup,
}: FetchEmailCodeParams) {
  const res = await http.post<IResponse<null>>(`/api/applicant/email/${email}`, {
    name,
    willGroup,
  });

  if (res?.flag) {
    return res?.data || {};
  } else {
    throw res?.message || '未知错误';
  }
}
