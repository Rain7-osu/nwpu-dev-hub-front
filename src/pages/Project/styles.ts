import styled from 'styled-components';
import { ContentWrapper } from '../../styles';

export const ProjectContainer = styled.div`
  .project-banner {
    width: 100%;
    position: relative;

    img {
      width: 100%;
    }

    .banner-desc {
      position: absolute;
      color: var(--base_gray_light);
      top: 50%;
      left: 10%;
      transform: translateY(-50%);
      z-index: 999;
      opacity: .75;
      
      @media screen and (min-width: 1080px) {
        font-size: 48px;
      }

      @media screen and (min-width: 720px) and (max-width: 1080px){
        font-size: 36px;
      }

      @media screen and (max-width: 720px) {
        font-size: 24px;
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
