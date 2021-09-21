import styled from 'styled-components';
import { ContentWrapper } from '../../styles';

export const NewsContainer = styled.main`
  .top-banner {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    img {
      @media (max-width: 1440px) {
        height: 358.5px;
      }

      @media (min-width: 1440px) {
        width: 100%;
      }
    }

    .banner-desc {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--base_gray_light);
      font-size: 36px;
      line-height: 150%;
      letter-spacing: 0.2em;
      transition: all .3s ease;

      @media (min-width: 1080px) {
        width: 80%;
        padding: 50px;
      }

      @media (max-width: 1080px) {
        width: 380px;
        padding: 50px;
        font-size: 28px;
        box-sizing: border-box;
      }
    }
  }
`;

export const HubNewsContainer = styled(ContentWrapper)`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  flex-wrap: wrap;
  
  .news-title {
    font-size: 28px;
    font-weight: 400;
    margin: 40px 0 20px;
    padding: 20px;

    @media (max-width: 720px) {
      text-align: center;
    }
  }
  
  .news-list {
    display: flex;
    
    @media (min-width: 720px) {
      flex-direction: row;
      flex-wrap: wrap;
      
      .news-card-wrapper {
        width: 50%;
      }
    }
    
    @media (max-width: 720px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      .news-card-wrapper {
        width: 80%;
      }
    }

  }
  
  .news-card-wrapper {
    padding: 20px;
    box-sizing: border-box;
    
    .news-card {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      background-color: var(--footer_bg);
      transition: all .3s ease;
      
      &:hover {
        box-shadow: var(--box_shadow);
      }
      
      .news-avatar {
        width: 100%;
        
        img {
          width: 100%;
        }
      }
      
      .news-title {
        font-size: 24px;
        line-height: 36px;
        height: 72px;
        font-weight: 400;
        padding: 20px;
      }
      
      .news-desc {
        font-size: 20px;
        color: var(--base_gray_color);
        font-weight: 400;
        padding: 20px;
      }
      
      @media (min-width: 1080px) {
        max-width: 500px;
      }

      @media (max-width: 1080px) {
        flex-direction: column;
        width: 100%;
      }
    }
  }
`;
