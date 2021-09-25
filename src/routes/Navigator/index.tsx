import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import { DevhubLogo } from '../../components/DevhubLogo';
import { Dropdown } from '../../components/Dropdown';
import Menu from '../../components/Menu';
import routes from '../RouterConfig';
import { HamburgerButton } from '../../components/HamburgerButton';
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
          <DevhubLogo size="normal" type="default"/>
          <Menu direction="horizontal">
            {links}
          </Menu>
        </NavWrapper>
      </DefaultContainer>
    </Container>
  );
});

Navigator.displayName = 'Navigator';
