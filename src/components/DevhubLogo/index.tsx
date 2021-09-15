import { DevhubWrapper } from './styles';
import { iconMap } from '../../assets/imgs/icons';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router';

export const DevhubLogo = ({ size }: { size: 'normal' | 'large' | 'small'}) => {
  const history = useHistory();
  const handleClick = useCallback(() => {
    history.push('/');
  }, [history]);
  return (
    <DevhubWrapper className={size} onClick={handleClick}>
      <div className="logo">
        <img alt="logo" src={iconMap['logo']}/>
      </div>
      <div className="base-name">Devhub</div>
      <div className="text-wrapper">
        <div className="cn-name">工大开发者社区</div>
        <div className="en-name">NPU Developer Hub</div>
      </div>
    </DevhubWrapper>
  );
};
