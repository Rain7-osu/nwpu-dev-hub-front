import React from 'react';
import { MobileContainer } from './styles';
import { Link } from 'react-router-dom';
import { DevhubLogo } from '../../components/DevhubLogo';

export const MobileNavigator = () => {
  return (
    <MobileContainer className="mobile">
      <DevhubLogo size="small" />
      <div><Link to="/register">报名</Link></div>
    </MobileContainer>
  );
};
