import { http } from './http';
import { IResponse } from './core/types';

export async function fetchCheckEmail(email: string) {
  const res = await http.get<IResponse<boolean>>(`/api/applicant/checkEmail/${email}`);
  if (res?.flag && res?.data) {
    return true;
  } else {
    throw res?.message || '未知错误';
  }
}
