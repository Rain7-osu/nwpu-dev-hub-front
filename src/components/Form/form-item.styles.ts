import styled from 'styled-components';

export const Container = styled.div`
  transition: all .3s ease;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 40px;
  
  .single-line-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    
    .single-line-right {
      flex: 1;
      overflow: hidden;
    }
  }

  .error-message {
    color: red;
    font-size: 12px;
    margin: 8px 0;
    line-height: 1.2em;
    overflow: hidden;

    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
