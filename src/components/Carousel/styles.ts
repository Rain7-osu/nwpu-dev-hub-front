import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  
  &:hover .control {
    &.left {
      left: 40px; 
    }
    
    &.right {
      right: 40px;
    }
  }
  
`;

export const ControlButton = styled.button<{
  src: string;
  right?: boolean;
}>`
  position: absolute;
  top: 50%;
  transition: all .3s ease;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  background-image: url(${props => props.src});
  background-size: contain;
  ${props => props.right ? 'transform: translateY(-50%) rotate(180deg);' : 'transform: translateY(-50%)'};
  
  @media screen and (min-width: 480px) {
    ${props => props.right ? 'right: -40px' : 'left: -40px'};
  }
  
  @media screen and (max-width: 480px) {
    ${props => props.right ? 'right: 40px' : 'left: 40px'}
  }
  
  &.hover {
    cursor: pointer;
  }
`;

export const Pictures = styled.div`
  overflow: hidden;
  
  > div {
    display: flex;
    flex-direction: row;
    transition: all .3s ease;
  }
`;

export const Picture = styled.div`
  flex: 1;
  
  img {
    width: 100%;
  }
`;
