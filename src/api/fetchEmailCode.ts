import { Intention } from '../pages/JoinUs/Register';
import { IResponse, request } from './base/request';

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
  const res = await request.post<IResponse<null>>(`/api/applicant/email/${email}`, {} ,{
    name,
    willGroup,
  });
  if (res?.flag) {
    return res?.data || {};
  } else {
    throw res?.message || '未知错误';
  }
}
