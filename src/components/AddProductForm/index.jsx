import React, { useState } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line

import { Container, Button } from './style';

import Input from '../Input';

import { addProductDB } from '../../api/products';

const AddProductForm = ({ setBool }) => {
  const INITIA_STATE = {
    firstName: '',
    lastName: '',
    productName: '',
    quantity: '',
    price: '',
  };
  const [field, setField] = useState(INITIA_STATE);
  const handleInput = ({ target }) => {
    const { name, value } = target;
    setField({
      ...field,
      [name]: value,
    });
    return null; // eslint reclama de arrow function sem retorno
  };

  const addProductInDb = async () => {
    const fieldArray = Object.values(field);
    if (fieldArray.every((i) => !i)) return alert('Preencha os campos!'); // eslint-disable-line
    const {
      firstName, lastName, productName, quantity, price,
    } = field;
    const data = {
      client: {
        firstName,
        lastName,
      },
      product: {
        productName,
        quantity,
        price,
      },
      active: true,
    };
    const result = await addProductDB(data);
    if (result.status === 201) {
      alert('Produto adicionado com sucesso!'); // eslint-disable-line
      setField(INITIA_STATE);
    }
    setBool(true);
    return null;
  };

  return (
    <Container>
      <Input
        inputId="firstName"
        type="text"
        handleInput={handleInput}
        value={field.firstName}
      >
        First Name
      </Input>
      <Input
        inputId="lastName"
        type="text"
        handleInput={handleInput}
        value={field.lastName}
      >
        Last Name
      </Input>
      <Input
        inputId="productName"
        type="text"
        handleInput={handleInput}
        value={field.productName}
      >
        Product Name
      </Input>
      <Input
        inputId="quantity"
        type="number"
        handleInput={handleInput}
        value={field.quantity}
      >
        Quantity
      </Input>
      <Input
        inputId="price"
        type="number"
        handleInput={handleInput}
        value={field.price}
      >
        Price
      </Input>
      <Button variant="contained" onClick={addProductInDb}>Adicionar</Button>
    </Container>
  );
};

export default AddProductForm;

AddProductForm.propTypes = {
  setBool: PropTypes.func.isRequired,
};
