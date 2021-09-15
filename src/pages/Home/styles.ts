import styled from 'styled-components';
import { ContentWrapper } from '../../styles';

export const HomeContainer = styled.div`
  .three-card {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
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
  
  @media screen and (min-width: 1080px) {
    flex-direction: row;
    align-items: stretch;
  }
  
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ThreeCardContainer = styled.div<{ color: string }>`
  margin: 20px;
  height: 525px;
  width: 360px;
  color: #fff;
  background-color: ${props => props.color};
  
  &:hover {
    cursor: pointer;
    box-shadow: var(--box_shadow_dark);
    transition: all .3s ease;
  }
  
  .img {
    width: 360px;
    height: 304px;
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
`;

export const HealthyWrapper = styled.section`
  background-color: #1B1F25;
  color: #fff;
  display: flex;
  box-sizing: border-box;
  
  .left {
    height: 200px;
  }
  
  @media screen and (min-width: 1440px) {
    padding: 0 160px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  @media screen and (min-width: 1080px) {
    height: 600px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    .right {
      height: 600px;
      width: 800px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      
      .picture {
        height: 300px;
        width: 400px;
        background-color: skyblue;
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
      width: 100%;
      padding: 20px;

      .picture {
        width: 100%;
        margin: 20px 0;
        background-color: skyblue;
      }
    }

    .left {
      padding-left: 64px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

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
