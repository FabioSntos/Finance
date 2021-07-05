import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/',
});

export { Api };
