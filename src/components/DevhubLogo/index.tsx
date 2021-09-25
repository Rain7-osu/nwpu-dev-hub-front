import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import cls from 'classnames';
import { iconMap } from '@src/assets/imgs/icons';
import { DevhubWrapper } from './styles';

export interface DevhubLogoProps {
  size?: 'normal' | 'large' | 'small';
  type?: 'default' | 'picture';
  className?: string;
  white?: boolean;
}

export const DevhubLogo = ({ size, type, className, white }: DevhubLogoProps ) => {
  const history = useHistory();
  const handleClick = useCallback(() => {
    history.push('/');
  }, [history]);

  const picture = white ? '/assets/DevhubLogo-white.svg' : '/assets/DevhubLogo-black.svg';

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
      {type === 'picture' && <img alt="logo" className={size} src={picture} />}
    </DevhubWrapper>
  );
};
