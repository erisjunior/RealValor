import React, { memo } from 'react';

import { Container } from './styles';

function Loading() {
  return (
    <Container>
      <div />
      <div />
    </Container>
  );
}

export default memo(Loading);
