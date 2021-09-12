import styled from 'styled-components';

export const Container = styled.div<{ width?: number; height?: number }>`
  width: ${props => props.width || 24 }px;
  height: ${props => props.height || 24}px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    height: 100%;
  }
`;
