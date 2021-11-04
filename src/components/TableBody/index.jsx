import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line

import {
  TableBody as TableBodyUI, TableRow, TableCell,
} from '@material-ui/core';

import Button from './style';

const TableBody = ({ products }) => (
  <TableBodyUI>
    {products.map((product) => (
      <TableRow key={product.id}>
        <TableCell align="center">
          {product.id}
        </TableCell>
        <TableCell align="center">{product.name}</TableCell>
        <TableCell align="center">{product.quantity}</TableCell>
        <TableCell align="center">
          $
          {product.price.toFixed(2)}
        </TableCell>
        <TableCell align="center">
          <Button variant="contained" size="small">Select</Button>
          <Button variant="contained" size="small" color="error">Delete</Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBodyUI>
);

export default TableBody;

TableBody.propTypes = {
  products: PropTypes.arrayOf({
    id: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
};
