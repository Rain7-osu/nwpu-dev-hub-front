import styled from 'styled-components';

export const Container = styled.div<{
  size?: number;
}>`
  width: ${props => props.size || 24 }px;
  height: ${props => props.size || 24}px;
  font-size: ${props => props.size || 24}px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    height: 100%;
  }
`;
