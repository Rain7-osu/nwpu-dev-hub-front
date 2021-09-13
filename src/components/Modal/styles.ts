import styled from 'styled-components';

export const ModalContainer = styled.div<{ mask: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.mask ? 'background: #00000073;' : ''}
`;

export const ModalContent = styled.div`
  background-color: #fff;
  position: relative;
  padding: 0 20px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  box-shadow: 0px -5px 15px 5px #a0a0a0;

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
  
  width: 100vw;
`;

export const ModalTitle = styled.div`
  border-bottom: 1px solid #e9e9e9;
  padding: 5px 5px 10px;
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBottom = styled.div`
  border-top: 1px solid #e9e9e9;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalMain = styled.div`
  padding: 10px;
  min-height: 120px;

  @media screen and (min-width: 480px) {
    min-width: 420px;
  }

  @media screen and (max-width: 480px) {
    width: calc(100% - 20px);
  }
`;
