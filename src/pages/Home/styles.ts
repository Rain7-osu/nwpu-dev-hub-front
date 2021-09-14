import styled from 'styled-components';
import { ContentWrapper } from '../../styles';

export const HomeContainer = styled.div`
  .simple-introduction {
    display: flex;
    
    @media screen and (max-width: 1080px) {
      justify-content: center;
    }
    
    @media screen and (min-width: 1080px) {
      justify-content: space-between;
    }
    
    align-items: center;
    flex-direction: row;
    margin-top: 100px;
  }
  
  .devhub-logo-main {
    transform: scale(1.5);
    color: #000;
    transition: all .3s ease;
    margin: 108px 0;

    @media screen and (min-width: 1080px) {
      margin-left: 108px;
      margin-right: 40px;
    }

    @media screen and (min-width: 1080px) {
      margin-right: 0;
      margin-left: 0;
    }
  }
  
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

  @media screen and (min-width: 1080px) {
    margin-right: 40px;
    padding: 0;
  }
`;

export const HomeItemWrapper = styled(ContentWrapper)`
  flex-wrap: wrap;
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
