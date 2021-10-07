import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 60px;
  background-color: var(--navigator_color);
  box-shadow: var(--box_shadow);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-sizing: border-box;
  
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
`;

export const MobileContainer = styled.nav`
  height: 60px;
  width: 100%;
  padding-right: 10px;
  box-sizing: border-box;
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

export const DefaultContainer = styled.nav`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  
  li {
    height: 100%;
  }

  a {
    display: block;
    text-decoration: none;
    border-color: transparent;
    border-style: solid;
    color: #000000d9;
    height: 100%;
    line-height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
    font-size: 16px;
    
    &::before {
      content: "";
      background-color: transparent;
      bottom: -2px;
    }
  }
`;

export const NavWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  .left-nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    height: 60px;
    
    > .logo {
      margin-right: 60px;
    }
  }
`;
