import styled from 'styled-components';

export const AuthContainer = styled.div`
  transition: all .3s ease;
  
  .auth-form {
    background-color: #fff;
    max-width: 1080px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0);
    box-sizing: border-box;
    border-radius: 15px;
    transition: all .3s ease;
    
    @media (min-width: 1080px) {
      padding: 120px 60px;
    }
    
    @media (max-width: 1080px) {
      max-width: 400px;
      padding: 60px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
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
  flex-direction: row;
  width: 100%;
  
  .email-code {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    .email-code-form-item {
      width: 140px;
    }
    
    input {
      width: 140px;
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
      font-size: 28px;
      margin-right: 20px;
    }
    
    max-width: 400px;
    transition: all .3s ease;
  }
  
  .form-picture {
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  @media (min-width: 1080px) {
    
    .form-container {
      flex: 1;
      width: 480px;
    }
    
    .form-picture {
      padding: 20px;
      box-sizing: border-box;
      color: var(--base_orange);
      
      img {
        width: 300px;
      }
    }
  }
  
  @media (max-width: 1080px) {
    .form-picture, .form-picture img {
      width: 0;
      overflow: hidden;
    }
    
    .form-container {
      max-width: 100%;
    }
  }
  
  .login-button {
    background: linear-gradient(90deg, #F13F12 0%, #F5A419 100%);
    height: 40px;
    border-radius: 20px;
    color: #fff;
    opacity: .75;
    transition: opacity .3s ease;
    
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

    .link-button {
      border: none;
      &:hover {
        background: none;
      }
    }
  }
`;

