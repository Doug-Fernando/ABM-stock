import React from 'react';
import { Button } from '@material-ui/core';

import { Container, Logo } from './style';

const Header = () => (
  <Container>
    <Logo>
      <a href="/">ABM Stock</a>
    </Logo>
    <Button variant="contained" size="medium">Login</Button>
  </Container>
);

export default Header;
