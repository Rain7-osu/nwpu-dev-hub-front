import styled, { css } from 'styled-components';

export const Page = styled.div`
  padding-top: 60px;
`;

export const boxShadow = css`
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
`;

export const borderRadius = css`
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px; 
`;

export const basePanel = css`
  ${boxShadow}
  ${borderRadius}
`;

export const baseInputHover = css`
  border: 1px solid var(--base_orange);
`;

export const baseInputFocus = css`
  border: 1px solid var(--base_orange);
  box-shadow: 0 0 2px 2px var(--base_orange);
  outline: 0;
`;

export const baseInputError = css`
  border: 1px solid red;
`;

export const baseInput = css`
  border: 1px solid var(--base_orange3);
  box-sizing: border-box;
  transition: all .3s ease;
  
  &:hover {
    ${baseInputHover}
  }

  &:focus {
    ${baseInputFocus}
  }

  &.error {
    border: 1px solid red;
  }

  &.readonly:hover {
    cursor: pointer;
  }
`;

export const ContentWrapper = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  transition: all .3s ease;
  display: flex;
`;
