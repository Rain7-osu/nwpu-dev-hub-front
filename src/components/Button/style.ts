import styled from 'styled-components';

export const BaseButton = styled.button`
  padding: 5px 10px;
  font-size: 16px;

  &:hover {
    cursor: pointer;

    &[disabled] {
      cursor: not-allowed;
    }
  }

  &.default {
    background-color: #fff;
    border: 1px solid #e9e9e9;
    color: #444;

    &[disabled] {
      background-color: darkgray;
    }

    &:hover {
      background-color: #e9e9e9;

      &[disabled] {
        background-color: darkgray;
      }
    }
  }

  &.warning {
    background-color: #f48617;
    border: 1px solid #f48617;
    color: #fff;

    &[disabled] {
      background-color: darkgray;
    }

    &:hover {
      background-color: #e57f15;

      &[disabled] {
        background-color: darkgray;
      }
    }

    &:active {
      background-color: #d07313;
    }
  }

  &.primary {
    background-color: deepskyblue;
    border: 1px solid deepskyblue;
    color: #fff;

    &[disabled] {
      background-color: darkgray;
    }

    &:hover {
      background-color: skyblue;

      &[disabled] {
        background-color: darkgray;
      }
    }

    &:active {
      background-color: lightblue;
    }
  }
`;