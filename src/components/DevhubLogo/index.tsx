import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import { iconMap } from '../../assets/imgs/icons';
import { DevhubWrapper } from './styles';
import cls from 'classnames';

export interface DevhubLogoProps {
  size?: 'normal' | 'large' | 'small';
  type?: 'default' | 'picture';
  className?: string;
}

export const DevhubLogo = ({ size, type, className }: DevhubLogoProps ) => {
  const history = useHistory();
  const handleClick = useCallback(() => {
    history.push('/');
  }, [history]);
  return (
    <DevhubWrapper className={cls(size, className)} onClick={handleClick}>
      {type === 'default' && (
        <>
          <div className="logo">
            <img alt="logo" src={iconMap['logo']}/>
          </div>
          <div className="base-name">
            <div className="base-sc-name">NPU</div>
            <div className="base-gr-name">Dev Hub</div>
          </div>
          <div className="text-wrapper">
            <div className="cn-name">工大开发者社区</div>
            <div className="en-name">NPU Developer Hub</div>
          </div>
        </>
      )}
      {type === 'picture' && <img className={size} alt="logo" src="https://z3.ax1x.com/2021/09/15/4VUW4g.png" />}
    </DevhubWrapper>
  );
};
