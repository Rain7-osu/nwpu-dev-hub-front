import React, { useState } from 'react';
import { LinkUl, MobileContainer } from './styles';
import { Link } from 'react-router-dom';
import { DevhubLogo } from '../../components/DevhubLogo';
import { Drawer } from '../../components/Drawer';
import { HamburgerButton } from '../../components/HamburgerButton';

export const MobileNavigator = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  return (
    <MobileContainer className="mobile">
      <DevhubLogo size="small" />
      {/*<div><Link to="/register">报名</Link></div>*/}
      <HamburgerButton />
      <Drawer
        visible={showDrawer}
      >
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><a>社区简介</a></li>
          <li><a>新闻中心</a></li>
          <li><a>项目介绍</a></li>
          <li><a>加入我们</a></li>
          <li><Link to="/register">报名</Link></li>
        </ul>
      </Drawer>
    </MobileContainer>
  );
};
