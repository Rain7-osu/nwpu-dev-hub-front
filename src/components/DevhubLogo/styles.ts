import styled from 'styled-components';

export const DevhubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #888;

  .base-name {
    display: none;
  }
  
  &.small {
    .text-wrapper {
      display: none;
    }
    
    .base-name {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      
      .base-sc-name {
        font-size: 20px;
      }
      
      .base-gr-name {
        font-size: 16px;
      }
    }
  }
  
  &.normal {
    height: 60px;
    width: 270px;
    
    .logo {
      width: 50px;
      height: 50px;
    }
    
    .cn-name {
      font-size: 24px;
    }
    
    .en-name {
      font-size: 20px;
    }
  }

  &.large {
    height: 90px;
    width: 405px;
    
    .logo {
      width: 75px;
      height: 75px;
    }

    .cn-name {
      font-size: 36px;
    }

    .en-name {
      font-size: 30px;
    }
  }
  
  &:hover {
    cursor: pointer;
    transition: all .3s ease;
  }
  
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
      height: 100%;
    }
  }
  
  .text-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    
    .cn-name {
      font-family: 幼圆, serif;
      font-weight: 600;
    }
  }
`;
