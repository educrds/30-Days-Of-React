import axios from 'axios';

const catFetch = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
});

export default catFetch;
