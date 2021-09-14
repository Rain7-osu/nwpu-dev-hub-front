import React, { memo } from 'react';
import { MobileContainer } from './styles';
import { iconMap } from '../../assets/imgs/icons';
import { Link } from 'react-router-dom';



export const DevhubMobileLogo = () => {
  return (
    <div className="logo">
      <img alt="logo" src={iconMap['logo']}/>
    </div>
  );
};

export const MobileNavigator = () => {
  return (
    <MobileContainer className="mobile">
      <DevhubMobileLogo />
      <div><Link to="/register">加入我们</Link></div>
    </MobileContainer>
  );
};
