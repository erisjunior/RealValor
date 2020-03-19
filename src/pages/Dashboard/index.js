import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Chart, Loading } from '~/components';
import { RevenueActions } from '~/store/ducks/revenue';

import { Container, Section } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { data, revenueLoading } = useSelector(state => state.revenue);

  const [yearsAgo, setYears] = useState(1);
  const [amount, setAmount] = useState(2);

  useEffect(() => {
    dispatch(RevenueActions.getRevenueRequest({ amount, yearsAgo }));
  }, [amount, dispatch, yearsAgo]);

  return (
    <Container>
      <Section>
        <h1>Data de realização do investimento</h1>
        <Button text='1 ano atrás' onClick={() => setYears(1)} />
        <Button text='2 anos atrás' onClick={() => setYears(2)} />
      </Section>
      <Section>
        <h1>Valor total investido</h1>
        <Button text='R$ 2 mil' onClick={() => setAmount(2)} />
        <Button text='R$ 10 mil' onClick={() => setAmount(10)} />
      </Section>
      {revenueLoading ? <Loading /> : <Chart data={data} />}
    </Container>
  );
}
