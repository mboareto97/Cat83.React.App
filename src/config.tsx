const dev = { baseUrl: 'http://localhost:3000/api/v1' };
  
const hm = { baseUrl: 'https://cat83-hml.marfrig.com.br/api' };
  
const prod = { baseUrl: 'https://cat83.marfrig.com.br/api' };

let config = dev;

export default {
    TokenLifetime: '300',
    Versao: '',
    timeoutApi: 60000,
    ...config,
};
  