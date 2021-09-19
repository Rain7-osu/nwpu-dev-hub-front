import React from 'react';
import { HamburgerButtonContainer } from './styles';
import cls from 'classnames';

export interface HamburgerButtonProps {
  color?: string | [string, string, string];
  size?: 'small' | 'large' | 'normal';
  onClick?: () => void;
}

export const HamburgerButton = (props: HamburgerButtonProps) => {
  const { color, size = 'normal', onClick } = props;

  return (
    <HamburgerButtonContainer
      color={typeof color === 'string' ? color.toString() : undefined}
      onClick={onClick}
    >
      <div className={cls('ham-wrapper', size)}>
        <div className="ham-item ham-1" />
        <div className="ham-item ham-2" />
        <div className="ham-item ham-3" />
      </div>
    </HamburgerButtonContainer>
  );
};
