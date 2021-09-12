import styled from 'styled-components';

export const Container = styled.div`
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
  input {
    outline: 1px solid deepskyblue;
    border: none;
    padding: 12px;
    font-size: 18px;
    width: 100%;
    box-sizing: border-box;

    &:hover, &:focus {
      outline: 1px solid #F48617;
    }
    
    &.error {
      outline: 1px solid red;
    }
  }
`;

export const BaseTextareaContainer = styled.div`
  textarea {
    line-height: 32px;
    padding: 20px;
    resize: none;
    height: 200px;
    outline: 1px solid deepskyblue;
    border: none;
    width: 100%;
    box-sizing: border-box;
    font-size: 18px;
    font-family: -apple-system, "Microsoft YaHei UI" ,BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    
    &:hover, &:focus {
      outline: 1px solid #F48617;
    }
  }
`;
