import axios from 'axios';

const URLHASH = '5d997c178bcc4a2fab78cb22473569cd';
const URL = `https://crudcrud.com/api/${URLHASH}/products`;

const createProduct = (name, quantity, price) => ({ name, quantity, price });

export const createProducts = async () => {
  axios.post(URL, createProduct('Tomato', 477, 2.25));
  axios.post(URL, createProduct('Onion', 75, 3.6));
  axios.post(URL, createProduct('Potato', 321, 1.25));
  axios.post(URL, createProduct('Cheese', 125, 21.25));
};

export const addProductDB = async (data) => axios.post(URL, data).then((response) => response);

export const getProducts = () => axios.get(URL).then((response) => response.data);
