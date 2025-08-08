// src/api/userApi.ts
import axios from 'axios';
import type { IUser } from '../interfaces/IUser';

const API = 'http://localhost:5001/api/users';

export const getUsers = async (): Promise<IUser[]> => {
  const res = await axios.get(API);
  return res.data;
};

export const createUser = async (user: IUser) => {
  return await axios.post(API, user);
};
