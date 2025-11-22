// import axiosClient from './axiosClient';
import type { Genre } from '../types/Genre';

const staticGenres: Genre[] = [
  { id: 1, name: 'Fiction' },
  { id: 2, name: 'Non-Fiction' },
  { id: 3, name: 'Science Fiction' },
  { id: 4, name: 'Biography' },
];

export const getGenres = async (): Promise<Genre[]> => {
  // const response = await axiosClient.get('/genres');
  // return response.data;
  return staticGenres;
};