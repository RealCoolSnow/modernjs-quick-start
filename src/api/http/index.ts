import axios, { AxiosRequestConfig, ResponseData } from 'axios';

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

/** get & post */
type Get = <T>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig,
) => Promise<ResponseData<T>>;

type Post = <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
) => Promise<ResponseData<T>>;

export const get: Get = async (url, params, config) =>
  http.get(url, { params, ...config });

export const post: Post = async (url, data, config) =>
  http.post(url, data, config);

export default http;
