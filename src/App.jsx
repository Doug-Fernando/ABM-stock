import React, { useState } from 'react';

import Container from './App.style';

import Header from './components/Header';
import Table from './components/Table';
import AddProductForm from './components/AddProductForm';

const App = () => {
  const [bool, setBool] = useState(true);
  return (
    <Container>
      <Header setBool={setBool} bool={bool} />

      {bool ? <Table /> : <AddProductForm setBool={setBool} />}
    </Container>
  );
};

export default App;
