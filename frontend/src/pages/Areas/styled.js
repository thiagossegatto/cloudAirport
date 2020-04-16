import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: #297980;
  padding: 20px;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;

  > div {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: center;
  }

  svg {
    height: 14px;
    color: #333;
  }
`;

export const BoxDay = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 60px 0 30px;

  h2 {
    display: flex;
    width: 100%;
    color: #333;
  }

  > div {
    display: flex;
    width: 100%;

    > div {
      display: flex;
      flex-direction: column;
      > div {
        display: flex;
        width: 18px;
        height: 18px;
        align-items: flex-end;
        justify-content: center;
        color: #fff;
      }
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column !important;
  margin-bottom: 20px;
  line-height: 25px;
  color: #fff;
`;
