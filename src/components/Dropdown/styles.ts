import styled from 'styled-components';
import { basePanel } from '../../styles';

export const DropdownContainer = styled.div`
  position: relative;
  
  .content {
    flex: 1;

    &:hover {
      cursor: pointer;
    }
  }
  
  .overlay {
    display: flex;
    flex-direction: column;
    z-index: 999;
    position: absolute;
    top: 50px;
    max-height: 0;
    opacity: 0;
    transition: all, opacity 0.3s ease;
    background-color: #fff;
    overflow: auto;
    box-sizing: border-box;
    ${basePanel};
    
    .overlay-content {
      padding: 5px 0;
    }

    &.show {
      max-height: 320px;
      opacity: 1;
    }
  }
`;
