import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'dva';
import { NavLink } from 'react-router-dom';
import { RootState } from '@src/models/types';
import { UserInfo } from '@src/data/user';
import { Button } from '@src/components/Button';
import { Dropdown } from '@src/components/Dropdown';
import Menu from '@src/components/Menu';
import { useRouter } from '@src/routes';

export const NavRight = () => {
  const { username, id }: UserInfo = useSelector<RootState>((state) => state.global.userInfo) as UserInfo;
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = useCallback(() => {
    dispatch({
      type: 'global/logout',
    });

    router.push({
      path: '/user/login',
    });
  }, [dispatch, router]);

  if (username?.length && typeof id === 'number' && id !== -1) {
    return (
      <Dropdown
        trigger="hover"
        placement="bottom-right"
        overlay={
          <Menu direction="vertical" >
            <Menu.Item>
              <NavLink to={ `/user/${id}/info`}>个人中心</NavLink>
            </Menu.Item>
            <Menu.Item onClick={handleLogout}>
              <a>退出登录</a>
            </Menu.Item>
          </Menu>
        }
      >
        <Button type="link" link={`/user/${id}/info`}>{username}</Button>
      </Dropdown>
    );
  }

  return (
    <Button type="link" link="/user/login">登录</Button>
  );
};
