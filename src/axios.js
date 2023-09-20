import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://650a8bb9dfd73d1fab087eba.mockapi.io',
});

export default instance;
