import styled from 'styled-components';

export const IntroductionContainer = styled.div`
  .top-banner {
    width: 100%;
    
    img {
      width: 100%;
    }
  }
  
  .intro-nav {
    height: 60px;
    font-size: 18px;
    background-color: var(--footer_bg);
    
    .intro-nav-menu {
      max-width: 1080px;
      margin: 0 auto;

      .nav-link {
        height: 60px;
        line-height: 60px;
      }
    }
  }
  
  .hub-introduction {
    padding: 40px;
    transition: all .3s ease;
    
    &:hover {
      background-color: var(--base_light3_orange);
    }
    
    .hub-introduction-wrapper {
      margin: 0 auto;
      max-width: 1080px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .hub-intro-title {
        margin: 40px;
        font-size: 24px;
      }
      
      .hub-intro-content {
        max-width: 720px;
        line-height: 1.5em;
        font-size: 18px;
        margin: 40px;
      }
    }
  }
  
  .hub-structure {
    background-color: var(--footer_bg);
    
    .hub-structure-wrapper {
      margin: 0 auto;
      max-width: 1080px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      
      .hub-structure-title {
        font-size: 24px;
        margin: 40px;
      }
      
      .hub-structure-content {
        margin: 40px;
        width: 100%;
        transition: transform .3s ease;
      }
    }
  }
  
  @media screen and (max-width: 480px) {
    .intro-nav {
      font-size: 12px;
      height: 40px;

      .intro-nav-menu {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        
        > li {
          flex: 1;
        }

        .nav-link {
          height: 40px;
          line-height: 40px;
          text-align: center;
          margin: 0 auto;
        }
      }
    }
  }
  
  .structure {
    width: 100%;
    margin: 0 auto;
    
    .devhub-logo .normal {
      transition: all .3s ease;
      
      @media screen and (min-width: 720px) {
        width: 250px;
      }

      @media screen and (min-width: 540px) and (max-width: 720px){
        width: 210px;
      }

      @media screen and (max-width: 540px){
        width: 180px;
      }
    }
    
    .l-1 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .l-2 {
      display: flex;
      flex-direction: column;
      
      .line-v {
        width: 2px;
        background-color: #a0a0a0;
        margin: 0 auto;
        transition: all .3s ease;

        @media screen and (min-width: 720px) {
          height: 60px;
        }

        @media screen and (min-width: 540px) and (max-width: 720px){
          height: 40px;
        }

        @media screen and (max-width: 540px){
          height: 20px;
        }
      }
      
      .line-groups {
        display: flex;
        width: 100%;
        flex-direction: row;
        margin: 0 auto;
        justify-content: space-between;
      }
      
      .line-h {
        height: 2px;
        background-color: #a0a0a0;
      }
      
      .line-2 {
        width: 75%;
        margin: 0 auto;
      }
    }
  }
`;

export const GroupIcon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  .group-icon {
    transition: all .3s ease;
  }
  
  .group-wrapper {
    @media screen and (min-width: 720px) {
      .group-icon {
        width: 120px;
        height: 120px;
      }
    }

    @media screen and (max-width: 720px) and (min-width: 540px){
      .group-icon {
        width: 90px;
        height: 90px;
      }
    }

    @media screen and (max-width: 540px) {
      .group-icon {
        width: 60px;
        height: 60px;
      }
    }
  }
`;
