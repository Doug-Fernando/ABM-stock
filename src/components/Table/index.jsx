import React from 'react';

import {
  Table as TableUI, TableHead, TableRow, TableCell,
} from '@material-ui/core';

import Container from './style';
import TableBody from '../TableBody';

const data = [
  {
    id: 1, name: 'Tomate', quantity: 5, price: 5,
  },
  {
    id: 2, name: 'Arroz', quantity: 53, price: 1.14,
  },
  {
    id: 3, name: 'Molho', quantity: 12, price: 2,
  },
  {
    id: 4, name: 'Macarrão', quantity: 22, price: 7.5,
  }];

const Table = () => (
  <Container>
    <TableUI>
      <TableHead>
        <TableRow>
          <TableCell align="center">ID</TableCell>
          <TableCell align="center">Product name</TableCell>
          <TableCell align="center">Quantity</TableCell>
          <TableCell align="center">Price</TableCell>
          <TableCell align="center">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody products={data} />
    </TableUI>
  </Container>
);

export default Table;
