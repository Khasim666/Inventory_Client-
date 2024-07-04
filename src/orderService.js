import axios from 'axios';

const API_URL = 'http://localhost:8080/api/order';

export const getAllOrders = () => {
  return axios.get(API_URL);
};

export const getOrder = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const createOrder = (order) => {
  return axios.post(API_URL, order);
};

export const updateOrder = (id, order) => {
  return axios.put(`${API_URL}/${id}`, order);
};

export const deleteOrder = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};