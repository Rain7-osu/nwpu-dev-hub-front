import styled from 'styled-components';

export const RegisterContainer = styled.div`
  margin: 20px auto;
  max-width: 1080px;

  .top-title {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    color: #ffffff;
    text-align: center;
    background-color: var(--base_orange);
    margin-bottom: 20px;
    transition: all .3s ease;

    @media screen and (min-width: 540px) {
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }
  }
`;

export const FormContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  
  @media screen and (min-width: 540px) {
    box-shadow: var(--nav_box_shadow);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
`;

export const FormRow = styled.div<{ align?: string }>`
  display: flex;
  justify-content: ${props => props.align || 'space-between'};
  align-items: center;
  
  > div {
    flex: 1;
  }
  
  .send-code {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    > div {
      flex: 1
    }
    
    .btn {
      transform: translateY(11px);
      margin-right: 20px;
      height: 46px;
    }
  }
`;

export const GenderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  .gender-wrapper {
    margin-right: 40px;
    
    &:hover {
      cursor: pointer;
    }
  }
`;

// 意向组别
export const IntentionGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5px;
  
  .intention-wrapper {
    padding: 3px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    
    &.chosen {
      background-color: #F48617;
      transition: all .3s ease;
    }
    
    &:hover {
      cursor: pointer;
    }
  }
`;

export const FormRowTitle = styled.div`
  font-size: 18px;
  padding: 15px 0;
`;

export const ErrorText = styled.div<{ size?: number }>`
  font-size: ${props => props.size || 12}px;
  color: red;
`;
