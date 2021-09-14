import React from 'react';
import { Container, DefaultContainer, DevhubWrapper, NavWrapper, LinkUl } from './styles';
import { MobileNavigator } from './MobileNavigator';
import { iconMap } from '../../assets/imgs/icons';
import { Link } from 'react-router-dom';


export const DevhubLogo = () => {
  return (
    <DevhubWrapper>
      <div className="logo">
        <img alt="logo" src={iconMap['logo']}/>
      </div>
      <div className="text-wrapper">
        <div className="cn-name">工大开发者社区</div>
        <div className="en-name">NPU Developer Hub</div>
      </div>
    </DevhubWrapper>
  );
};

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
      <MobileNavigator />
      <DefaultContainer className="default">
        <NavWrapper>
          <DevhubLogo />
          <Links />
        </NavWrapper>
      </DefaultContainer>
    </Container>
  );
};
