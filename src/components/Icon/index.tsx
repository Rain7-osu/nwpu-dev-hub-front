import React from 'react';
import { iconMap } from '../../assets/imgs/icons';
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
          : <i className={`icon_${type}`} />
      }
    </Container>
  );
}
