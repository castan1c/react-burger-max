import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://udemy-burger-14bdd.firebaseio.com/'
});

export default instance;