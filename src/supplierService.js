import axios from 'axios';

const API_URL = 'http://localhost:8080/api/supplier';

export const getAllSuppliers = () => {
  return axios.get(API_URL);
};

export const getSupplier = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const createSupplier = (supplier) => {
  return axios.post(API_URL, supplier);
};

export const updateSupplier = (id, supplier) => {
  return axios.put(`${API_URL}/${id}`, supplier);
};

export const deleteSupplier = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};