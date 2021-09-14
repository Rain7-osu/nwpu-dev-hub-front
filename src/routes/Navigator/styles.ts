import styled from 'styled-components';
import { ContentWrapper } from '../../styles';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--navigator_color);
  box-shadow: var(--nav_box_shadow);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  
  @media screen and (max-width: 480px) {
    .default {
      display: none;
    }
    
    .mobile {
      display: flex;
    }
  }
  
  @media screen and (min-width: 480px){
    .default {
      display: flex;
    }
    
    .mobile {
      display: none;
    }
  }

  a {
    text-decoration: none;
    color: #000;
    height: 100%;
    padding: 20px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--hover_base);
      cursor: pointer;
    }

    :visited {
      color: #000;
    }
  }
`;

export const MobileContainer = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: fixed;
  top: 0;
  
  .logo {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100%;
    }
  }
`;

export const DefaultContainer = styled.header`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
`;

export const DevhubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  align-items: center;
  width: 270px;
  
  &:hover {
    cursor: pointer;
  }
  
  .logo {
    width: 50px;
    height: 50px;
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
    color: #888;
    
    .cn-name {
      font-size: 24px;
      font-family: 幼圆, serif;
      font-weight: 600;
    }
    
    .en-name {
      font-size: 20px;
    }
  }
`;

export const NavWrapper = styled(ContentWrapper)`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LinkUl = styled.ul`
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  margin-left: 0;
  appearance: none;
  height: 100%;
  
  @media screen and (min-width: 900px) {
    display: flex;
  }
  
  @media screen and (max-width: 900px) {
    display: none;
  }
  
  li {
    list-style: none;
  }
`;
