import React, { BaseSyntheticEvent } from 'react';
import cls from 'classnames';
import { CSSProperties } from 'styled-components';
import { BaseButton } from './style';

export interface ButtonProps {
  children?: string;
  type?: 'danger' | 'warning' | 'default' | 'primary';
  onClick?: (e: BaseSyntheticEvent) => void;
  style?: CSSProperties;
  disabled?: boolean;
  extClass?: string;
}

export function Button (props: ButtonProps) {
  const { children, onClick, style, type = 'default', disabled = false, extClass } = props;

  return (
    <BaseButton
      className={cls(type, extClass)}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </BaseButton>
  );
}

