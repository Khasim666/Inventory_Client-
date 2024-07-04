import axios from 'axios';

const API_URL = 'http://localhost:8080/api/stock';

export const getAllStocks = () => {
  return axios.get(API_URL);
};

export const getStock = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const createStock = (stock) => {
  return axios.post(API_URL, stock);
};

export const updateStock = (id, stock) => {
  return axios.put(`${API_URL}/${id}`, stock);
};

export const deleteStock = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};