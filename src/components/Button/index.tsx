import React, { BaseSyntheticEvent, useCallback } from 'react';
import { useHistory } from 'react-router';
import cls from 'classnames';
import { CSSProperties } from 'styled-components';
import { BaseButton } from './style';

export interface ButtonProps {
  children?: string;
  type?: 'danger' | 'warning' | 'default' | 'primary' | 'link';
  onClick?: (e: BaseSyntheticEvent) => void;
  style?: CSSProperties;
  disabled?: boolean;
  extClass?: string;
  htmlType?: 'submit' | 'reset' | 'button' | undefined;
  block?: boolean;
  link?: string;
}

export function Button (props: ButtonProps) {
  const {
    children,
    onClick,
    style,
    type = 'default',
    disabled = false,
    extClass,
    htmlType = 'button',
    block,
    link,
  } = props;

  const history = useHistory();

  const handleClick = useCallback((e) => {
    if (onClick) {
      onClick(e);
    } else if (link) {
      history.push(link);
    }
  }, [history, link, onClick]);

  return (
    <BaseButton
      className={cls(type, extClass, {
        'ndd-btn-block': block,
      })}
      onClick={handleClick}
      style={style}
      disabled={disabled}
      type={htmlType}
    >
      {children}
    </BaseButton>
  );
}

