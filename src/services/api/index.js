import api from './config';

export function getBitcoin(time) {
  return api.get('/v1/exchangerate/BTC/BRL', {
    params: { time },
  });
}
