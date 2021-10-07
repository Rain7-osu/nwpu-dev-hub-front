import styled from 'styled-components';
import { ContentWrapper } from '../../styles';

export const JoinUsContainer = styled.main`
  width: 100%;
  padding-top: 60px;
  
  .see-rule {
    color: var(--base_orange);
    font-size: 18px;
  }
`;

export const EndRegisterContainer = styled(ContentWrapper)`
  height: 100px;
  color: var(--base_gray_color);
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
