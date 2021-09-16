import styled, {keyframes} from 'styled-components';

const maskAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const modalAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ModalContainer = styled.div<{ mask: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.mask ? 'background: #00000073;' : ''};
  animation: ${maskAnimation} .3s ease;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  position: relative;
  padding: 0 20px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  box-shadow: 0px -5px 15px 5px #a0a0a0;
  box-sizing: border-box;
  animation: ${modalAnimation} .3s ease;

  .close {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 15px;
    height: 15px;
    
    &:hover {
      cursor: pointer;
    }
  }
  
  .show {
    transform: scale(1);
    opacity: 1;
  }
  
  @media screen and (min-width: 500px) {
    width: 480px;
  }
  
  @media screen and (max-width: 500px) {
    width: calc(100% - 100px);
  }
`;

export const ModalTitle = styled.div`
  border-bottom: 1px solid #e9e9e9;
  padding: 10px 5px;
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBottom = styled.div`
  border-top: 1px solid #e9e9e9;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalMain = styled.div`
  padding: 10px;
  min-height: 120px;
  width: 100%;
`;
