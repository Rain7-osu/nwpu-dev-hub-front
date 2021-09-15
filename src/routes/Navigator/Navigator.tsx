import React from 'react';
import { Container, DefaultContainer, NavWrapper, LinkUl } from './styles';
import { MobileNavigator } from './MobileNavigator';
import { Link } from 'react-router-dom';
import { DevhubLogo } from '../../components/DevhubLogo';

const Links = () => {
  return (
    <LinkUl>
      <li><Link to="/">官网首页</Link></li>
      <li><a>社区简介</a></li>
      <li><a>新闻中心</a></li>
      <li><a>项目介绍</a></li>
      <li><a>加入我们</a></li>
      <li><Link to="/register">报名</Link></li>
    </LinkUl>
  );
};

export const Navigator = () => {
  return (
    <Container>
      <MobileNavigator/>
      <DefaultContainer className="default">
        <NavWrapper>
          <DevhubLogo size="normal"/>
          <Links/>
        </NavWrapper>
      </DefaultContainer>
    </Container>
  );
};
