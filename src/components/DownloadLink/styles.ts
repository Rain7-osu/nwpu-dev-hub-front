import styled from 'styled-components';
import { ContentWrapper } from '../../styles';

export const DownloadLinkWrapper = styled(ContentWrapper)`
  
  .download-link {
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 540px) {
      justify-content: center;
    }

    a {
      display: block;
      padding: 10px;
      color: var(--base_orange);
    }
    
    a:hover {
      text-decoration: underline;
    }
  }
`;
