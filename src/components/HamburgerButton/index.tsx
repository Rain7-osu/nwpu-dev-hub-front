import React from 'react';
import { HamburgerButtonContainer } from './styles';
import cls from 'classnames';

export interface HamburgerButtonProps {
  color?: string | [string, string, string];
  size?: 'small' | 'large' | 'normal';
}

export const HamburgerButton = (props: HamburgerButtonProps) => {
  const { color, size = 'normal' } = props;

  return (
    <HamburgerButtonContainer color={typeof color === 'string' ? color.toString() : undefined}>
      <div className={cls("ham-wrapper", size)}>
        <div className="ham-item ham-1" />
        <div className="ham-item ham-2" />
        <div className="ham-item ham-3" />
      </div>
    </HamburgerButtonContainer>
  );
}