import styled from 'styled-components';

export const LoginContainer = styled.div`
  form .only-bottom-border {
    input {
      border-width: 0;
      border-bottom-width: 1px;
      box-shadow: none;
      
      &:hover, &:focus {
        border-bottom-width: 1px;
      }
    }
  }
`;

