import styled from 'styled-components';
import { ContentWrapper } from '@src/styles';

export const NotFoundContainer = styled(ContentWrapper)`
  .ndd-not-found {
    display: flex;
    flex-direction: column;
    margin: 160px auto;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 720px) {
      width: 720px;
      
      .title {
        font-size: 64px;
        color: var(--base_orange);
      }
      
      .desc {
        color: var(--base_orange2);
        margin: 20px 0;
      }
      
      .timer {
        color: var(--base_orange2);
        margin: 20px 0;
      }
      
      .option {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
