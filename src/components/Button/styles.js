import { transparentize } from 'polished';
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;

  border: 1px solid #333;
  border-radius: 5px;

  height: 45px;
  width: 300px;

  margin: 5px;

  color: #fff;
  background: #179;

  :hover {
    background: ${transparentize(0.2, '#179')};
  }
`;
