import styled from 'styled-components';
import { basePanel } from '../../styles';

export const SelectorContainer = styled.div`
  display: flex;
  position: relative;
  flex: 1;
`;

export const Content = styled.div`
  width: 100%;
  flex: 1;
  
  &:hover {
    cursor: pointer;
  }
`;

export const SelectorDropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 999;
  transition: transform 0.3s ease;
  transform-origin: 0 50px;
  background-color: #fff;
  padding: 5px 0;
  overflow: auto;
  transform: translateY(50px);
  box-sizing: border-box;
  
  ${basePanel}
`;

export const OptionContainer = styled.div`
  padding: 5px 10px;
  transition: background 0.3s ease;
  
  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
  
  &.selected {
    background-color: #e6f7ff;
  }
`;
