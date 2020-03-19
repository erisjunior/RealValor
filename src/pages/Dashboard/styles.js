import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;

  padding: 20px;
`;

export const Section = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;

  padding: 20px;
  margin: 20px;
`;

export const InputsContainer = styled(Section)`
  flex-direction: column;
`;

export const ChartContainer = styled(Section)`
  width: 500px;
  height: 300px;

  display: flex;
  align-content: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 40px;
  color: #179;

  text-align: center;
`;

export const SubTitle = styled(Title)`
  font-size: 18px;
  color: #333;

  text-align: justify;
`;
