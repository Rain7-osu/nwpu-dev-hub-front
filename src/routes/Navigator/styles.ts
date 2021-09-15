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
  
  @media screen and (max-width: 1080px) {
    .mobile {
      display: flex;
    }
    
    .default {
      display: none;
    }
  }

  @media screen and (min-width: 1080px) {
    .mobile {
      display: none;
    }

    .default {
      display: flex;
    }
  }

  a {
    text-decoration: none;
    border-color: transparent;
    border-style: solid;
    border-width: 0;
    border-bottom-width: 4px;
    color: #000;
    height: 80%;
    padding: 10px 20px;
    transition: border-color 0.3s ease;

    &:hover {
      cursor: pointer;
      border-color: var(--base_orange);
    }
  }
`;

export const MobileContainer = styled.header`
  height: 60px;
  width: 100vw;
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
