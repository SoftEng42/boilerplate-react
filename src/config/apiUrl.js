const env = process.env.NODE_ENV;
let apiOriginUrl = '';

switch (env) {
  case 'production':
    apiOriginUrl = '';
    break;
  case 'testing':
    apiOriginUrl = 'http://localhost:1012';
    break;
  default:
    apiOriginUrl = '';
    break;
}

const apiUrl = {
  SIGNIN: `${apiOriginUrl}/signin`,
};

export default apiUrl;

