import axios from 'axios';

const API_SERVER = process.env.REACT_APP_API_SERVER;

const ApiService = axios.create({
  baseURL: API_SERVER,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export default ApiService;
