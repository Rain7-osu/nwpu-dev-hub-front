import styled from 'styled-components';
import { ContentWrapper } from '../../styles';

export const ProjectContainer = styled.main`
  .project-banner {
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      @media (min-width: 1440px) {
        max-width: 100%;
      }

      @media (max-width: 1440px) {
        height: 358.5px;
        --x: calc(100% - width) ;
        transform: translateX(var(--x)px);
      }
    }

    .banner-desc {
      position: absolute;
      color: var(--base_gray_light);
      top: 50%;
      left: 10%;
      transform: translateY(-50%);
      z-index: 999;
      opacity: .75;
      
      @media (min-width: 1080px) {
        font-size: 48px;
      }

      @media (max-width: 1080px){
        font-size: 36px;
      }
    }
  }
`;

export const ProjectItemWrapper = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-left: 10px;
  padding-right: 10px;
  
  .item-title {
    font-size: 24px;
    padding: 10px 0;
    line-height: 150%;
  }
  
  .item-desc {
    font-size: 16px;
    color: var(--base_gray_color);
    padding: 10px 0;
    line-height: 150%;
  }
  
  .item-banner {
    width: 100%;
    padding: 10px 0;
    
    img {
      width: 100%;
    }
  }
`;
