import axios from 'axios';

export const axiosBaseWithJson = axios.create({
  baseURL: `${process.env.REACT_APP_DOMAIN}`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

