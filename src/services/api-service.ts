import axios from 'axios';

const API_SERVER = process.env.REACT_APP_API_SERVER;
if (API_SERVER === undefined) throw new Error('Please declare variables in /.env.local');

const ApiService = axios.create({
  baseURL: API_SERVER,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export default ApiService;
