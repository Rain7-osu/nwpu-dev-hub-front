import React from 'react';
import { useSelector } from 'dva';
import { RootState } from '@src/models/types';
import { UserInfo } from '@src/data/user';
import { Button } from '@src/components/Button';

export const NavRight = () => {
  const { username, id }: UserInfo = useSelector<RootState>((state) => state.global.userInfo) as UserInfo;

  if (username?.length && typeof id === 'number' && id !== -1) {
    return (
      <Button type="link" link={`/user/${id}/info`}>{username}</Button>
    );
  }

  return (
    <Button type="link" link="/user/login">登录</Button>
  );
};
