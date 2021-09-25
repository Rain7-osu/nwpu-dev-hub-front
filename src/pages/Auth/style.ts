import styled from 'styled-components';

export const AuthContainer = styled.div`
  .auth-form {
    background-color: #fff;
    max-width: 1080px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 120px 60px;
    box-sizing: border-box;
    border-radius: 15px;
    
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
  
  form .only-bottom-border {
    input {
      border-width: 0;
      border-bottom-width: 1px;
      box-shadow: none;
      
      &:hover, &:focus {
        border-bottom-width: 1px;
        padding-left: 10px;
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

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: row;
  
  .form-container {
    .icon-class {
      color: var(--base_orange);
      font-size: 28px;
      margin-right: 20px;
    }
  }
  
  .form-picture {
    transition: width .3s ease, height .3s ease .1s;
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
    .form-picture {
      width: 0;
      height: 0;
      overflow: hidden;
    }
    
    .for-container {
      max-width: 480px;
    }
  }
  
  .login-button {
    background: linear-gradient(90deg, #F13F12 0%, #F5A419 100%);
    height: 40px;
    border-radius: 20px;
    color: #ffffff;
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
`;

