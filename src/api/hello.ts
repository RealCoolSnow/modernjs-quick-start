import { get, post } from './http';

export const helloGet = (params?: any, config?: any) =>
  get<string>('hello', { params, ...config });

export const helloPost = (params?: any, config?: any) =>
  post<string>('hello', params, config);
