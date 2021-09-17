import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  background: var(--footer_bg);
  padding: 30px 0;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  flex-direction: column;
  
  color: var(--base_gray_color);
  
  .copy-right {
    font-size: 14px;
    white-space: nowrap;
    width: 100%;
    text-align: center;
  }
  
  .top {
    padding: 30px 0;
    border-bottom: 1px solid var(--base_gray_color);
    
    .follow-us {
      font-size: 24px;
    }
  }
  
  .medium {
    padding: 60px 0;
    
    .m-left {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      
      .m-col {
        a {
          display: block;
          color: var(--base_gray_color);
        }

        .c-item-large {
          font-size: 20px;
          margin-bottom: 30px;
        }

        .c-item-small {
          font-size: 16px;
        }
      }
    }

  }
  
  @media screen and (max-width: 1080px) {
    .top {
      text-align: center;
    }
    
    .medium {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      .m-right {
        margin-top: 60px;
      }
      
      .m-left {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 75%;

        .m-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          margin: 0;
        }
      }
    }
  }
  
  @media screen and (min-width: 1080px) {
    .center-box {
      margin: 0 auto;
      min-width: 1080px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .footer-wrapper {
      flex: 1;
    }
    
    .medium {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      
      .m-left {
        .m-col {
          margin-right: 100px;
        }
      }
      
      .m-right {
        margin-right: 150px;
      }
    }
  }
`;
