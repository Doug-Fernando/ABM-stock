import React from 'react';

import { Container, Logo, Login } from './style';

const Header = () => (
  <Container>
    <Logo>
      <a href="/">ABM Stock</a>
    </Logo>
    <Login>Login</Login>
  </Container>
);

export default Header;
