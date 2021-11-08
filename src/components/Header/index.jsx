import React from 'react';
import PropTypes from 'prop-types'; //eslint-disable-line

import { Button } from '@material-ui/core';

import { Container, Logo } from './style';

const Header = ({ setBool, bool }) => (
  <Container>
    <Logo>
      <a href="/">ABM Stock</a>
    </Logo>
    <Button variant="contained" size="medium" onClick={() => setBool(!bool)}>
      {bool ? 'Adicionar produto' : 'Voltar'}
    </Button>
  </Container>
);

export default Header;

Header.propTypes = {
  setBool: PropTypes.func.isRequired,
  bool: PropTypes.bool.isRequired,
};
