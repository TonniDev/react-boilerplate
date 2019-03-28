const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    apiServerUrl: '/api/',
    apiExternalUrl: '/api/'
  },
  testing: {
    apiServerUrl: 'https://jsonplaceholder.typicode.com/'
  },
  staging: {
    apiServerUrl: 'https://jsonplaceholder.typicode.com/',
    apiExternalUrl: 'https://jsonplaceholder.typicode.com/'
  },
  development: {
    apiServerUrl: 'http://localhost:8070/api/'
  },
  production: {
    apiServerUrl: 'https://jsonplaceholder.typicode.com/',
    apiExternalUrl: 'https://jsonplaceholder.typicode.com/'
  }
};

module.exports = Object.assign({}, config.all, config[config.all.env]);
