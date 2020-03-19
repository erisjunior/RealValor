import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 450px;
  height: 40px;

  margin: 10px;

  color: #333;

  input {
    padding: 10px;
    margin: 10px;

    align-self: flex-end;

    border: 1px solid #179;
    border-radius: 5px;
  }
`;
