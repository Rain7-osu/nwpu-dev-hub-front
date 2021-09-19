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

export function Icon(props: IconProps) {
  const { alt, type, width, height, className } = props;

  return (
    <Container className={className} width={width} height={height}>
      <img alt={alt || type} src={type in iconMap ? iconMap[type] : ''} />
    </Container>
  );
}
