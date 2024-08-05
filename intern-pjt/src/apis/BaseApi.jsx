import axios from 'axios';

export const BASE_URL = 'https://my-json-server.typicode.com';

export const userInstance = axios.create({
  baseURL: BASE_URL + '/typicode/demo/db',
  withCredentials: true,
});