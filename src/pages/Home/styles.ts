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
