import styled from 'styled-components';

export const AuthContainer = styled.div`
  transition: all .3s ease;
  
  .auth-form {
    margin: 400px auto;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 1080px) and (min-width: 480px) {
      padding: 60px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 480px) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 140px;
    }
    
    .auth-page-logo {
      position: absolute;
      top: -80px;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
  
  .only-bottom-border {
    input {
      border-width: 0;
      border-bottom-width: 1px;
      box-shadow: none;
      box-sizing: border-box;
      padding-left: 0;
      padding-right: 0;
      
      .single-line-wrapper {
        width: 100%;
      }
      
      &:hover, &:focus {
        border-bottom-width: 1px;
        box-sizing: border-box;

        @media screen and (min-width: 1080px) {
          padding-left: 10px;
        }
      }
    }
  }
  
  .login-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -999;
    
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const BaseContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: row;
  background-color: #fff;
  border-radius: 15px;
  
  .email-code {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    .email-code-form-item {
      width: calc(100% - 180px);
    }
    
    input {
      width: 100%;
      box-shadow: none;
    }
    
    .code-button {
      width: 140px;
      margin-left: 20px;
      height: 52px;
      border: 1px solid var(--base_orange);
    }
  }
  
  .form-container {
    .icon-class {
      color: var(--base_orange);
      font-size: 24px;
      margin-right: 20px;
      width: 26px;
      height: 26px;
    }
  }
  
  .form-picture {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  @media screen and (min-width: 1080px) {
    padding: 80px 40px;

    .form-container {
      flex: 1;
      width: 480px;
    }
    
    .form-picture {
      padding: 20px;
      margin-right: 60px;
      box-sizing: border-box;
      color: var(--base_orange);
      
      img {
        object-fit: cover;
        max-width: 400px;
      }
    }
  }
  
  @media screen and (max-width: 1080px) {
    padding: 80px 40px;
    width: 80%;

    .form-container {
      flex: 1;
    }

    .form-picture, .form-picture img {
      display: none;
    }
  }
  
  @media screen and (max-width: 480px) {
    border-radius: 0;
    
    .form-container {
      width: 100%;
    }
  }
  
  button.login-button {
    background: linear-gradient(90deg, #F13F12 0%, #F5A419 100%);
    height: 40px;
    border-radius: 20px;
    color: #fff;
    opacity: .75;
    transition: opacity .3s ease;
    margin: 40px auto 0;
    max-width: 260px;
    
    &:hover {
      opacity: 1;
      background: linear-gradient(90deg, #F13F12 0%, #F5A419 100%);
    }

    &:hover {
      background-color: red;
    }
  }
  
  .bottom-link {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .link-button {
      border: none;
      &:hover {
        background: none;
      }
    }
  }
`;

