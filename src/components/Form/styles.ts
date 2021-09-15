import styled from 'styled-components';
import { baseInput } from '../../styles';

export const Container = styled.div`
  transition: all .3s ease;
  
  @media screen and (min-width: 720px) {
    margin: 0 40px;
  }

  @media screen and (max-width: 720px) {
    margin: 0 15px;
  }
  
  .single-line-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  
  .error-message {
    color: red;
    font-size: 12px;
    margin: 8px 0;
    height: 14px;
  }
    
`;

export const Label = styled.div`
  font-size: 18px;
  padding: 15px 0;
`;

export const RequiredTag = styled.span`
  &::before {
    content: '*';
    color: red;
  }
`;

export const InputContainer = styled.div`
  flex: 1;
  
  input {
    padding: 12px;
    font-size: 18px;
    width: 100%;
    box-sizing: border-box;
    ${baseInput}
  }
`;

export const BaseTextareaContainer = styled.div`
  textarea {
    line-height: 32px;
    padding: 20px;
    resize: none;
    width: 100%;
    box-sizing: border-box;
    font-size: 18px;
    font-family: -apple-system, "Microsoft YaHei UI", BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    ${baseInput};
  
    @media screen and (max-width: 480px) {
        height: 400px;
    }
  
    @media screen and (max-width: 480px) {
        height: 400px;
    }
  }
}`;
