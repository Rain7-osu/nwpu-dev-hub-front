import styled from 'styled-components';

export const HamburgerButtonContainer = styled.div<{ color?: string | [string, string, string] }>`
  .ham-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    
    .ham-item {
      background: ${({ color }) => typeof color === 'string' ? color : '#aaa'};
      
      &.ham-1 {
        background: ${({ color }) => Array.isArray(color) ? color[0] : '#aaa'};
      }

      &.ham-2 {
        background: ${({ color }) => typeof color === 'string' ? color[1] : '#aaa'};
      }

      &.ham-3 {
        background: ${({ color }) => typeof color === 'string' ? color[2] : '#aaa'};
      }
    }
    
    &.small {
      width: 20px;
      height: 20px;
      padding: 2px;

      .ham-item {
        width: 16px;
        height: 2px;
      }
    }
    
    &.normal {
      width: 40px;
      height: 40px;
      padding: 4px;
      
      .ham-item {
        width: 32px;
        height: 4px;
      }
    }
    
    &.large {
      width: 60px;
      height: 60px;
      padding: 6px;

      .ham-item {
        width: 48px;
        height: 6px;
      }
    }
  }
`;
