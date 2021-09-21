import styled from 'styled-components';
import { ContentWrapper } from '../../styles';

export const HomeContainer = styled.div`
  .three-card {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .last-pic {
    width: 100%;
    margin: 100px 0;
    
    img {
      width: 100%;
    }
  }
`;

export const SimpleIntroduction = styled.div`
  max-width: 500px;
  line-height: 30px;
  font-size: 20px;
  transition: all .3s ease;
  padding: 20px;
`;

export const HomeItemWrapper = styled(ContentWrapper)`
  margin-top: 40px;
  margin-bottom: 40px;
  
  > div.hover-block {
    flex: 1;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
      transition: all .3s ease;
      background-color: var(--hover_base);
    }
  }
  
  @media (min-width: 1080px) {
    flex-direction: row;
    align-items: stretch;
  }
  
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ThreeCardContainer = styled.div<{ color: string }>`
  height: 525px;
  width: 350px;
  color: #fff;
  box-sizing: border-box;
  padding: 10px;
  
  .three-box {
    width: 100%;
    height: 100%;
    background-color: ${props => props.color};
    box-sizing: border-box;

    &:hover {
      cursor: pointer;
      box-shadow: var(--box_shadow_dark);
      transition: all .3s ease;
    }

    img {
      width: 100%;
      height: auto;
      background-size: contain;
      box-sizing: border-box;
      border: 1px solid #000;
    }

    .main {
      padding: 50px 20px 20px;
    }

    .title {
      margin-bottom: 10px;
      font-size: 20px;
    }

    .description {
      font-size: 18px;
    }
  }
`;

export const PerfectMechanismWrapper = styled.section`
  background-color: #1B1F25;
  color: #fff;
  display: flex;
  box-sizing: border-box;
  
  .left {
    height: 200px;
  }
  
  .right {
    .picture {
      position: relative;
      
      img {
        height: 100%;
      }
      
      .pic-text {
        position: absolute;
        color: #ffffff;
        transition: all .3s ease;
      }
    }
  }
  
  @media screen and (min-width: 1440px) {
    padding: 0 160px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .right {
      height: 540px;
      width: 720px;

      .picture {
        height: 270px;
        width: 360px;
      }
    }
  }
  
  @media screen and (min-width: 1080px) {
    height: 540px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    .right {
      height: 540px;
      width: 720px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      
      .picture {
        height: 270px;
        width: 360px;
        overflow: hidden;
        
        &:hover {
          .pic-text {
            color: var(--base_orange);
            font-size: 32px;
          }
        }

        .pic-text {
          font-size: 40px;
          bottom: 25px;
          left: 25px;
        }
        
        img {
          transition: all .3s ease;
        }
        
        img:hover {
          transform: scale(1.2);
        }
        
      }
    }
    
    .left {
      width: 240px;
      padding-left: 40px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      
      .title {
        line-height: 64px;
        font-size: 32px;
      }
      
      .subtitle {
        line-height: 48px;
        font-size: 24px;
      }
    }
  }
  
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .right {
      flex-direction: column;
      padding: 40px;

      .picture {
        padding: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .pic-text {
          font-size: 36px;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        img {
          width: 100%;
          max-width: 540px;
        }
      }
    }

    .left {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding-top: 75px;
      
      .title {
        line-height: 64px;
        font-size: 32px;
      }

      .subtitle {
        line-height: 48px;
        font-size: 24px;
      }
    }
  }
`;

export const JoinUsModuleWrapper = styled.section`
  background-color: #fff;
  
  .img img {
    width: 300px;
  }
  
  .text-wrapper {
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    padding-left: 80px;
  }
  
  .text-box {
    width: 260px;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    letter-spacing: 0.3em;
    
    .title {
      font-size: 24px;
      font-weight: bolder;
      padding: 20px 0;
    }
    
    .subtitle {
      font-size: 20px;
      color: #000;
      font-weight: 500;
    }

    .join-link {
      font-size: 18px;
      padding: 5px 0;
      margin: 35px 0;

      display: flex;
      flex-direction: row;
      
      .text {
        display: block;
        text-decoration: none;
        color: var(--base_gray_color);
        transition: color .3s ease;
      }
      
      .text:hover {
        color: deepskyblue;
        cursor: pointer;
      }
      
      .icon {
        height: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        
        img {
          height: 1em;
        }
      }
    }
  }
  
  @media screen and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0;

    .text-wrapper {
      margin-top: 100px;
    }
  } 
  
  @media screen and (min-width: 1080px) {
    padding: 100px;
    display: flex;
    justify-content: center;
  }
`;
