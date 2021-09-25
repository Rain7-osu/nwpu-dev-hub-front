import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import { DevhubLogo } from '@src/components/DevhubLogo';
import { Dropdown } from '@src/components/Dropdown';
import Menu from '../../components/Menu';
import routes from '../RouterConfig';
import { HamburgerButton } from '@src/components/HamburgerButton';
import { Container, DefaultContainer, MobileContainer, NavWrapper } from './styles';

export const Navigator = memo(() => {
  const { pathname } = useLocation();
  const links = (
    <>
      {routes.map(({ title, path }) => {
        // login 的另作处理
        if (typeof path !== 'string' || path === '/login') {
          return null;
        }

        return (
          <Menu.Item key={title} active={pathname === path}>
            <NavLink to={path}>{title}</NavLink>
          </Menu.Item>
        );
      })}
    </>
  );

  return (
    <Container>
      <MobileContainer className="mobile">
        <DevhubLogo size="small" type="default"/>
        <Dropdown
          placement="bottom-right"
          overlay={<Menu>{links}</Menu>}
        >
          <HamburgerButton/>
        </Dropdown>
      </MobileContainer>
      <DefaultContainer className="default">
        <NavWrapper>
          <div className="left-nav">
            <DevhubLogo className="logo" size="normal" type="default"/>
            <Menu direction="horizontal">
              {links}
            </Menu>
          </div>
          <div className="right-user">
            <NavLink to="/login">点击登录</NavLink>
          </div>
        </NavWrapper>
      </DefaultContainer>
    </Container>
  );
});

Navigator.displayName = 'Navigator';
