import { Group, Role } from '@src/data/user';

export interface IParams {
  [key: string]: any;
}

export interface IBody {
  [key: string]: any;
}

export interface IHeaders {
  [key: string]: any;
}

export interface IResponse<T> {
  flag: boolean;
  code: number;
  message: string;
  data: T;
}

export interface LoginResponse {
  username?: string;
  role?: Role;
  email?: string;
  group?: Group;
  avatar?: string;
}
