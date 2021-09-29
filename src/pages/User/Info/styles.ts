import styled from 'styled-components';

export const InfoContainer = styled.div`
  @media (max-width: 1080px) {
    
  }
  
  @media (min-width: 1080px) {
    
  }
`;

export const TopBanner = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(90deg, #F13F12 0%, #F5A419 100%);
`;

export const TopTitle = styled.div`
  color: #ffffff;
  text-align: center;
  padding-top: 20px;

  @media (max-width: 1080px) {
    font-size: 24px;
    margin-top: 60px;
  }

  @media (min-width: 1080px) {
    font-size: 48px;
  }
`;

export const TopLogo = styled.div`
  @media (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-top: 60px;
  }

  @media (min-width: 1080px) {
    padding-left: 60px;
    padding-top: 60px;
  }
`;

export const MainContent = styled.div`
  background-color: #fff;
  
  @media (min-width: 1080px) {
    max-width: 1440px;
    margin: -40px auto 0;
    border-radius: 15px;
    box-shadow: var(--base_box_shadow);
    padding: 80px;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
  }
`;

export const MemberInfo = styled.div`
  .title {
    text-align: center;
    font-size: 36px;
    color: var(--base_orange);
    padding: 20px;
  }
  
  .icon-info {
    margin-top: 80px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    
    .title {
      font-size: 16px;
    }
  }
`;
