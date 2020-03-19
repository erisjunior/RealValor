import PropTypes from 'prop-types';
import React, { memo, useRef } from 'react';

import { Container } from './styles';

const numberRegex = /^[0-9]+$/;

function Input({ onChange, text, maxAmount, ...props }) {
  const inputRef = useRef();

  function handleChange(e) {
    let { value } = e.target;
    value = Number(value);

    if (!numberRegex.test(value)) return;

    if (maxAmount) {
      if (value > maxAmount) {
        onChange(maxAmount);
        return;
      }
    }

    onChange(value);
  }

  return (
    <Container onClick={() => inputRef.current.focus()}>
      <span>{text}</span>
      <input ref={inputRef} onChange={handleChange} {...props} />
    </Container>
  );
}

export default memo(Input);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string,
  maxAmount: PropTypes.number,
};

Input.defaultProps = {
  text: '',
  maxAmount: null,
};
