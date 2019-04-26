import axios from 'axios';

export default axios.create({
  headers: {
    'x-origin-application': 'myapp',
    'x-origin-channel': 'web'
  }
});
