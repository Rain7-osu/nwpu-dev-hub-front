import styled, { css } from 'styled-components';

const disabled = css`
  &[disabled] {
    background-color: var(--base_gray_light);
  }
`;

export const BaseButton = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  transition: all .3s ease;
  
  &.ndd-btn-block {
    width: 100%;
  }

  &:hover {
    cursor: pointer;

    &[disabled] {
      cursor: not-allowed;
    }
  }

  &.default {
    background-color: #fff;
    border: 1px solid var(--base_orange3);
    color: var(--base_orange);
    
    ${disabled};

    &:hover {
      background-color: var(--base_orange3);

      ${disabled};
    }
  }

  &.primary {
    background-color: var(--base_orange);
    color: #fff;

    ${disabled};

    &:hover {
      background-color: var(--base_orange2);

      ${disabled};
    }

    &:active {
      background-color: var(--base_orange1);
    }
  }
`;
