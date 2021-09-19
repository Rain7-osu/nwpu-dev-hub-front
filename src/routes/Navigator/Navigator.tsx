import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import { DevhubLogo } from '../../components/DevhubLogo';
import { Dropdown } from '../../components/Dropdown';
import Menu from '../../components/Menu';
import { HamburgerButton } from '../../components/HamburgerButton';
import { Container, DefaultContainer, MobileContainer, NavWrapper } from './styles';

export const Navigator = () => {
  const { pathname } = useLocation();
  const links = (
    <>
      <Menu.Item active={pathname === '/'}>
        <NavLink to="/">首页</NavLink>
      </Menu.Item>
      <Menu.Item active={pathname === '/info'}>
        <NavLink to="/info">社区简介</NavLink>
      </Menu.Item>
      {/*<Menu.Item active={pathname === '/news'}>*/}
      {/*  <NavLink to="/news">新闻中心</NavLink>*/}
      {/*</Menu.Item>*/}
      {/*<Menu.Item active={pathname === '/project'}>*/}
      {/*  <NavLink to="/project" >项目介绍</NavLink>*/}
      {/*</Menu.Item>*/}
      <Menu.Item active={pathname === '/register'}>
        <NavLink to="/register" >加入我们</NavLink>
      </Menu.Item>
    </>
  );

  return (
    <Container>
      <MobileContainer className="mobile">
        <DevhubLogo size="small" type="default" />
        <Dropdown
          placement="bottom-right"
          overlay={<Menu>{links}</Menu>}
        >
          <HamburgerButton />
        </Dropdown>
      </MobileContainer>
      <DefaultContainer className="default">
        <NavWrapper>
          <DevhubLogo size="normal" type="default" />
          <Menu direction="horizontal">
            {links}
          </Menu>
        </NavWrapper>
      </DefaultContainer>
    </Container>
  );
};
