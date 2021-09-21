import styled from 'styled-components';
import icon_wechat from '../../assets/imgs/icons/icon_home_footer-wecaht-default.png';
import icon_wechat_hover from '../../assets/imgs/icons/icon_home_footer-wechat-hover.png';
import { boxShadow } from '../../styles';

export const FooterContainer = styled.footer`
  margin-top: 200px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    .follow-us {
      font-size: 24px;
      display: flex;
      align-items: center;

      .wechat-logo {
        height: 1.5em;
        width: 1.5em;
        margin-left: 20px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }

    .qr-code {
      display: none;
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
          transition: color .3s ease;
          
          &:hover {
            color: var(--base_orange);
          }
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
      
      .follow-us {
        .wechat-logo {
          background-image: url(${icon_wechat_hover});
        }
      }
      
      .qr-code {
        display: block;
        margin-left: 20px;
        width: 150px;
        height: 150px;
      }
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
    .top {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      
      .qr-code {
        position: absolute;
        bottom: 100%;
        ${boxShadow};
        width: 200px;
        height: 200px;
      }
      
      .wechat-logo {
        background-image: url(${icon_wechat});
      }
      
      .follow-us {
        display: flex;
        flex-direction: row;
        font-size: 24px;        
        cursor: pointer;
        
        &:hover {
          cursor: pointer;
          
          .wechat-logo {
            background-image: url(${icon_wechat_hover});
          }
        }
        
        &:hover + .qr-code {
          display: block;
        }
      }
    }
    
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
