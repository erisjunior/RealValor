import PropTypes from 'prop-types';
import React, { memo } from 'react';

import { ButtonContainer } from './styles';

function Button({ text, onClick, ...rest }) {
  return (
    <ButtonContainer onClick={onClick} {...rest}>
      {text}
    </ButtonContainer>
  );
}

export default memo(Button);

Button.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};
