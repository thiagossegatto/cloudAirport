import styled from 'styled-components';

export const InputStyled = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: column;
  position: relative;
  margin-bottom: 15px;

  > label {
    font-size: 14px;
    color: #333;
    display: flex;
    margin-bottom: 5px;
    font-weight: bold;
  }

  > svg {
    position: absolute;
    bottom: 5px;
    right: 10px;
    color: #333;
    height: 25px;
    align-items: center;
    justify-items: center;
    display: flex;
  }

  > input {
    display: flex;
    width: 100%;
    border-radius: 3px;
    background: #fff;
    border: 1px solid #d8d8d8;
    font-family: Roboto;
    color: #666;
    font-size: 14px;
    font-weight: bold;
    height: 35px;
    padding: 0 10px;
  }
`;
