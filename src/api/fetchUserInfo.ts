import { http } from '@src/api/http';
import { IResponse } from '@src/api/core/types';
import { UserInfo } from '@src/data/user';

export const fetchUserInfo = async () => {
  const res = await http.get<IResponse<UserInfo>>('/api/user/info');

  if (!res?.flag) {
    throw res?.message || '未知错误';
  }

  return res.data;
};
