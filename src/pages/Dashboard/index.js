import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Input, Chart, Button, Loading, Modal } from '~/components';
import { RevenueActions } from '~/store/ducks/revenue';

import {
  Container,
  Section,
  InputsContainer,
  ChartContainer,
  Title,
  SubTitle,
} from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { data, revenueLoading } = useSelector(state => state.revenue);

  const [yearsAgo, setYears] = useState(1);
  const [amount, setAmount] = useState(2000);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(RevenueActions.getRevenueRequest({ amount, yearsAgo }));
  }, [amount, dispatch, yearsAgo]);

  return (
    <Container>
      <Modal
        data={data}
        isOpen={modal}
        onRequestClose={() => setModal(false)}
      />
      <Title>Análise de investimentos</Title>
      <SubTitle>
        Serão calculados os resultados de investimentos de um determinado valor
        em reias em feito à uma determinada quantidade de anos atrás
      </SubTitle>
      <SubTitle>
        Fica à disposição do usuario a manipulação das entradas, para então
        serem mostrados os resultados no gráfico.
      </SubTitle>
      <Section>
        <InputsContainer>
          <Input
            text='Data de realização do investimento:'
            value={yearsAgo}
            maxAmount={10}
            onChange={setYears}
          />
          <Input
            text='Valor total investido:'
            value={amount}
            onChange={setAmount}
          />
        </InputsContainer>
        <ChartContainer>
          {revenueLoading ? <Loading /> : <Chart data={data} />}
        </ChartContainer>
      </Section>
      <Button
        text='Checar Detalhamento'
        onClick={() => !revenueLoading && setModal(!modal)}
      />
    </Container>
  );
}
