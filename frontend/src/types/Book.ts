import type { Genre } from './Genre';

export interface Book {
  id: number;
  title: string;
  author: string;
  genreId: number;
  publishedYear: number;
  genre?: Genre;
}