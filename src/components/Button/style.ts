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

  &.warning {
    background-color: #f48617;
    border: 1px solid #f48617;
    color: #fff;

    ${disabled};

    &:hover {
      background-color: #e57f15;

      ${disabled};
    }

    &:active {
      background-color: #d07313;
    }
  }

  &.primary {
    background-color: deepskyblue;
    border: 1px solid deepskyblue;
    color: #fff;

    ${disabled};

    &:hover {
      background-color: skyblue;

      ${disabled};
    }

    &:active {
      background-color: lightblue;
    }
  }
`;
