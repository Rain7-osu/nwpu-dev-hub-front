import React from 'react';
import cls from 'classnames';
import { iconMap } from '@src/assets/imgs/icons';
import { Container } from './styles';

export interface IconProps {
  type: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const keys = Object.keys(iconMap);

export function Icon(props: IconProps) {
  const { alt, type, width, height, className } = props;

  return (
    <Container className={className} width={width} height={height}>
      {
        keys.includes(type)
          ? <img alt={alt || type} src={type in iconMap ? iconMap[type] : ''} />
          : <span className={cls(`icon-${type}`, 'icon-font')} />
      }
    </Container>
  );
}
