import axios from 'axios';

const api = axios.create({
  // Use a URL que confirmamos que está funcionando no navegador
  baseURL: 'https://atv-portfolio-amber.vercel.app/api',
});

export default api;