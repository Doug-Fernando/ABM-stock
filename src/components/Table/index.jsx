import React, { useState, useEffect } from 'react';

import {
  Table as TableUI, TableHead, TableRow, TableCell,
} from '@material-ui/core';

import { Container, LoadAnimation } from './style';
import TableBody from '../TableBody';

import { getProducts } from '../../api/products';

const Table = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const fetchProducts = await getProducts();
    setProducts(fetchProducts);
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? <LoadAnimation />
        : (
          <Container>
            <TableUI>
              <TableHead>
                <TableRow>
                  <TableCell align="center">_id</TableCell>
                  <TableCell align="center">Product name</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody products={products} />
            </TableUI>
          </Container>
        )}
    </>
  );
};

export default Table;
