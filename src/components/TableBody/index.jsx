import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line

import {
  TableBody as TableBodyUI, TableRow, TableCell,
} from '@material-ui/core';

import Button from './style';

const TableBody = ({ products, deleteProduct }) => (
  <TableBodyUI>
    {products && products.map(({ _id, product }) => (
      <TableRow key={_id}>
        <TableCell align="center">
          {_id}
        </TableCell>
        <TableCell align="center">{product.productName}</TableCell>
        <TableCell align="center">{product.quantity}</TableCell>
        <TableCell align="center">
          $
          {Number(product.price).toFixed(2)}
        </TableCell>
        <TableCell align="center">
          <Button variant="contained" size="small">Select</Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => deleteProduct(_id)}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBodyUI>
);

export default TableBody;

TableBody.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  })).isRequired,
  deleteProduct: PropTypes.func.isRequired,
};
