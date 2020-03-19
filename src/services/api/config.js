import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rest.coinapi.io',
  headers: { 'X-CoinAPI-Key': '1CAEAEA7-6172-424A-A4D6-43DEEDCE6CE3' },
});

export default api;
