import { HttpInstance } from './base/request';
import { httpFactory } from './base/fetcher';

let httpInstance: HttpInstance | null = null;

export const getHttpInstance = () => {
  if (!httpInstance) {
    httpInstance = httpFactory();
    return httpInstance;
  }

  return httpInstance;
}