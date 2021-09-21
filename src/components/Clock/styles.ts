import styled from 'styled-components';

export const ClockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  box-sizing: border-box;
  
  .clock {
    display: flex;
    padding: 0 60px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    user-select: none;
    
    @media screen and (max-width: 720px) {
      padding: 0 20px;
    }
  }
  
  .clock-title {
    margin-bottom: 20px;
    width: 100%;
    
    > div {
      margin: 0 auto;
      padding: 10px;
      max-width: 540px;
      border-bottom: 1px solid var(--base_orange);
      color: var(--base_orange);
      text-align: center;
      font-size: 16px;
    }
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  &.orange {
    .time-value {
      color: var(--base_orange);
    }

    .time-name {
      background-color: var(--base_orange);
    }
  }

  &.purple {
    .time-value {
      color: var(--base_purple);
    }

    .time-name {
      background-color: var(--base_purple);
    }
  }

  &.green {
    .time-value {
      color: var(--base_green);
    }

    .time-name {
      background-color: var(--base_green);
    }
  }
  
  @media screen and (min-width: 720px) {
    .time-value {
      font-size: 96px;
    }
    
    .time-name {
      line-height: 45px;
      font-size: 28px;
      width: 45px;
      height: 45px;
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 720px){
    .time-value {
      font-size: 48px;
    }

    .time-name {
      line-height: 24px;
      font-size: 14px;
      width: 24px;
      height: 24px;
      margin-bottom: 5px;
    }
  }
  
  .time-value {
    transition: all .3s ease;
  }

  .time-name {
    text-align: center;
    border-radius: 50%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s ease;
    
    > div {
      text-align: center;
      transition: all .3s ease;
    }
  }
`;
