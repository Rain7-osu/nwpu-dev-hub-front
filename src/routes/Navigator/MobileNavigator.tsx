import React from 'react';
import { MobileContainer } from './styles';
import { Link } from 'react-router-dom';
import { DevhubLogo } from '../../components/DevhubLogo';

export const MobileNavigator = () => {
  return (
    <MobileContainer className="mobile">
      <DevhubLogo size="small" />
      <div><Link to="/register">加入我们</Link></div>
    </MobileContainer>
  );
};
