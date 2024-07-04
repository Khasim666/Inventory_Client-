import axios from 'axios';

const API_URL = 'http://localhost:8080/api/report';

export const getStockReport = () => {
  return axios.get(`${API_URL}/stock`);
};

export const getOrderReport = () => {
  return axios.get(`${API_URL}/order`);
};

export const getSupplierReport = () => {
  return axios.get(`${API_URL}/supplier`);
};