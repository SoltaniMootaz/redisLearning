// import axiosClient from './axiosClient';
import type { Book } from '../types/Book';

const staticBooks: Book[] = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genreId: 1, publishedYear: 1925, genre: { id: 1, name: 'Fiction' } },
  { id: 2, title: '1984', author: 'George Orwell', genreId: 3, publishedYear: 1949, genre: { id: 3, name: 'Science Fiction' } },
  { id: 3, title: 'Sapiens', author: 'Yuval Noah Harari', genreId: 2, publishedYear: 2011, genre: { id: 2, name: 'Non-Fiction' } },
  { id: 4, title: 'Steve Jobs', author: 'Walter Isaacson', genreId: 4, publishedYear: 2011, genre: { id: 4, name: 'Biography' } },
];

export const getBooks = async (filter?: { search?: string; genreId?: number }): Promise<Book[]> => {
  // const params = new URLSearchParams();
  // if (filter?.search) params.append('search', filter.search);
  // if (filter?.genreId) params.append('genreId', filter.genreId.toString());
  // const response = await axiosClient.get(`/books?${params.toString()}`);
  // return response.data;
  let books = staticBooks;
  if (filter?.search) {
    books = books.filter(book => book.title.toLowerCase().includes(filter.search!.toLowerCase()));
  }
  if (filter?.genreId) {
    books = books.filter(book => book.genreId === filter.genreId);
  }
  return books;
};

export const getBook = async (id: number): Promise<Book> => {
  // const response = await axiosClient.get(`/books/${id}`);
  // return response.data;
  const book = staticBooks.find(b => b.id === id);
  if (!book) throw new Error('Book not found');
  return book;
};

export const addBook = async (book: Omit<Book, 'id' | 'genre'>): Promise<Book> => {
  // const response = await axiosClient.post('/books', book);
  // return response.data;
  const newBook: Book = {
    ...book,
    id: staticBooks.length + 1,
    genre: { id: book.genreId, name: 'Unknown' }, // For simplicity, since no genre lookup
  };
  staticBooks.push(newBook);
  return newBook;
};