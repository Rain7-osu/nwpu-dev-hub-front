import { IResponse, request } from './base/request';

export async function fetchCheckEmail(email: string) {
  const res = await request.get<IResponse<boolean>>(`/api/applicant/checkEmail/${email}`);
  if (res?.flag && res?.data) {
    return true;
  } else {
    throw res?.message || '未知错误';
  }
}
