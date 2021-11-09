import React from 'react';
import PropTypes from 'prop-types' //eslint-disable-line

import { InputLabel, Input } from '@material-ui/core';

import FormControl from './style';

const InputForm = ({
  children, type, inputId, handleInput,
  value,
}) => (
  <>
    <FormControl>
      <InputLabel htmlFor={inputId}>{children}</InputLabel>
      <Input type={type} id={inputId} name={inputId} onChange={handleInput} value={value} />
    </FormControl>
  </>
);

export default InputForm;

InputForm.propTypes = {
  children: PropTypes.node.isRequired,
  inputId: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};
