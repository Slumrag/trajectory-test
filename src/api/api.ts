import axios from 'axios';

export const carsApi = axios.create({
  baseURL: 'https://test.tspb.su/test-task',
  url: '/vehicles',
});
