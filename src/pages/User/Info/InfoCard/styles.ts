import styled from 'styled-components';

export const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  flex: 1;
  margin: 20px;
  position: relative;
  
  .info-title {
    font-size: 16px;
    border-bottom: 2px solid var(--base_gray_color);
    padding: 16px 0;
  }
  
  .info-main {
    margin-top: 20px;
  }
`;
