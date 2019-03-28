import axios from 'axios';

export default axios.create({
  headers: {
    'x-origin-application': 'minhaoi',
    'x-origin-channel': 'web',
    'x-cpf': '00000000031'
  }
});
