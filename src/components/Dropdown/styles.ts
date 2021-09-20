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
  
  .overlay.bottom-right {
    top: 120%;
    right: 0;
  }
  
  .overlay.bottom-left {
    left: 0;
    top: 120%;
  }
  
  .overlay.bottom {
    top: 120%;
    left: 0;
    transform: translateX(-50%);
  }
  
  .overlay.top {
    bottom: 120%;
    left: 0;
    transform: translateX(-50%);
  }

  .overlay.top-right {
    bottom: 120%;
    right: 0;
  }

  .overlay.top-left {
    bottom: 120%;
    left: 0;
  }
  
  .overlay {
    display: flex;
    flex-direction: column;
    z-index: 999;
    position: absolute;
    max-height: 0;
    opacity: 0;
    transition: all 0.3s ease;
    background-color: #fff;
    overflow: hidden;
    box-sizing: border-box;
    ${basePanel};
    
    &.scroll {
      overflow: auto;
    }
    
    .overlay-content {
      padding: 5px 0;
    }

    &.show {
      max-height: 320px;
      opacity: 1;
    }
  }
`;
