import React from 'react';
import { Container } from './styles';
import { iconMap } from '../../assets/imgs';

export interface IconProps {
  type: string;
  alt?: string;
  width?: number;
  height?: number;
}

export function Icon(props: IconProps) {
  const { alt, type, width, height } = props;
  
  return (
    <Container width={width} height={height}>
      <img alt={alt || type} src={type in iconMap ? iconMap[type] : ''} />
    </Container>
  );
}