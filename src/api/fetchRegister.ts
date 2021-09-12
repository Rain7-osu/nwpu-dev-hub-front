import { IResponse, request } from './base/request';

export interface FetchRegisterParams {
  name: string;
  gender: boolean;
  department: string;
  grade: string;
  qualification: 0 | 1 | 2 | -1;
  willGroup: 0 | 1 | 2 | 3 | 4 | -1;
  email: string;
  code: string;
  qq?: string;
  wechat?: string;
  personalExperience?: string;
  parenthetical?: string;
}

export async function fetchRegister(params: FetchRegisterParams) {
  const res = await request.post<IResponse<null>>('/api/applicant',{}, params);
  if (res?.flag) {
    return res?.data || {};
  } else {
    throw res?.message || '未知错误';
  }
}