import styled from 'styled-components';

export const SubNavContainer = styled.div`
  height: 60px;
  font-size: 18px;
  background-color: var(--footer_bg);

  .sub-nav-menu {
    max-width: 1080px;
    margin: 0 auto;

    .sub-nav-link {
      height: 60px;
      line-height: 60px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
    height: 40px;

    .sub-nav-menu {
      width: 100%;
      display: flex;
      flex-direction: row;
      margin: 0 auto;

      > li {
        flex: 1;
      }

      .sub-nav-link {
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin: 0 auto;
      }
    }
  }
`;
