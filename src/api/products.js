import axios from 'axios';

const URLHASH = 'e43c6d15eadd405a82f1517394c42f0d';
const URL = `https://crudcrud.com/api/${URLHASH}/products`;

export const addProductDB = async (data) => axios.post(URL, data).then((response) => response);

export const getProducts = () => axios.get(URL).then((response) => response.data);

export const deleteProduct = (id) => axios.delete(`${URL}/${id}`).then((response) => response);
