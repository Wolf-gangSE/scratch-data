import axios from 'axios';

const API_URL = 'https://scratch-data-260a21873d5c.herokuapp.com/';

const api = axios.create({
  baseURL: API_URL
});

export default api;