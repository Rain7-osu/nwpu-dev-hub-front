import React from 'react';
import cls from 'classnames';
import { iconMap } from '@src/assets/imgs/icons';
import { Container } from './styles';

export interface IconProps {
  type: string;
  alt?: string;
  size?: number;
  className?: string;
}

const keys = Object.keys(iconMap);

// 暂时这么写，后面等全部迁移到 icon-font 后修改
export function Icon(props: IconProps) {
  const { alt, type, className, size } = props;

  return (
    <Container className={className} size={size}>
      {
        keys.includes(type)
          ? <img alt={alt || type} src={type in iconMap ? iconMap[type] : ''} />
          : <span className={cls(`icon-${type}`, 'icon-font')} />
      }
    </Container>
  );
}
