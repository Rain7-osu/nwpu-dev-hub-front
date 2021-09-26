import styled from 'styled-components';
import { baseInput } from '@src/styles';
export { Container } from './form-item.styles';

export const Label = styled.div`
  font-size: 18px;
  padding: 15px 0;
  line-height: 24px;
`;

export const RequiredTag = styled.span`
  &::before {
    content: '*';
    color: red;
  }
`;

export const InputContainer = styled.div`
  
  input {
    padding: 12px;
    font-size: 18px;
    width: 100%;
    box-sizing: border-box;
    ${baseInput};
    caret-color: var(--base_orange);
  }

  input:hover {
    box-sizing: border-box;
  }
`;

export const BaseTextareaContainer = styled.div`
  position: relative;

  .textarea-counter {
    color: #444;
    position: absolute;
    bottom: -25px;
    right: 10px;
    height: 20px;
    font-size: 14px;
    caret-color: var(--base_gray_color);


    .current-count {
      color: #f00;
    }
  }

  textarea {
    padding: 20px;
    line-height: 32px;
    resize: none;
    width: 100%;
    box-sizing: border-box;
    font-size: 18px;
    font-family: -apple-system, "Microsoft YaHei UI", BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    border: none;
    outline: none;
    ${baseInput};
  
    @media screen and (min-width: 480px) {
        height: 200px;
    }
  
    @media screen and (max-width: 480px) {
        height: 400px;
    }
  }
`;
