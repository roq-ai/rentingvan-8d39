import axios from 'axios';
import queryString from 'query-string';
import { VanInterface, VanGetQueryInterface } from 'interfaces/van';
import { GetQueryInterface } from '../../interfaces';

export const getVans = async (query?: VanGetQueryInterface) => {
  const response = await axios.get(`/api/vans${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createVan = async (van: VanInterface) => {
  const response = await axios.post('/api/vans', van);
  return response.data;
};

export const updateVanById = async (id: string, van: VanInterface) => {
  const response = await axios.put(`/api/vans/${id}`, van);
  return response.data;
};

export const getVanById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/vans/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteVanById = async (id: string) => {
  const response = await axios.delete(`/api/vans/${id}`);
  return response.data;
};
