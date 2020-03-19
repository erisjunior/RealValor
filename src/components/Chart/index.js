import PropTypes from 'prop-types';
import React, { memo, useMemo } from 'react';
import { Chart as ChartComponent } from 'react-charts';

import { Container } from './styles';

function Chart({ data: { bitcoin, directTreasure } }) {
  const chartData = React.useMemo(
    () => [
      {
        label: 'Bitcoin',
        data: bitcoin.chartData,
      },
      {
        label: 'Tesouro Fixo',
        data: directTreasure.chartData,
      },
    ],
    [bitcoin, directTreasure]
  );

  const axes = useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  );

  return (
    <Container>
      <ChartComponent data={chartData} axes={axes} tooltip />
    </Container>
  );
}

export default memo(Chart);

Chart.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};
