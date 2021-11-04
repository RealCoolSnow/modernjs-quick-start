import axios from 'axios';

const baseURL: string = process.env.API_BASE_URL?.toString() || '';

const http = axios.create({
  baseURL,
  timeout: 30000,
  withCredentials: true,
});

http.interceptors.request.use(
  config => {
    config.params = {
      ...config.params,
    };
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

http.interceptors.response.use(response => {
  if (response.status !== 200) {
    return Promise.reject(response.data);
  }

  return response.data;
});

export default http;
