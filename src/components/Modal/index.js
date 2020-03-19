import PropTypes from 'prop-types';
import React, { memo } from 'react';
import ModalComponent from 'react-modal';

import * as helpers from '~/helpers';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Modal({ data, ...rest }) {
  if (!data.directTreasure.initialDate) return null;

  return (
    <ModalComponent style={customStyles} {...rest}>
      <h1>Tesouro Direto</h1>
      <h4>
        Data de inicio: {helpers.formatDate(data.directTreasure.initialDate)}
      </h4>
      <h4>
        Valor inicial:{' '}
        {helpers.formatMoney(data.directTreasure.initialAmount * 100)}
      </h4>
      <h4>
        Valor atual: {helpers.formatMoney(data.directTreasure.amount * 100)}
      </h4>
      <h4>
        Rendimento: {helpers.formatMoney(data.directTreasure.revenue * 100)}
      </h4>
    </ModalComponent>
  );
}

export default memo(Modal);

Modal.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};
