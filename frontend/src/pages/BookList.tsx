import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBooks } from '../api/booksApi';
import { getGenres } from '../api/genresApi';
import type { Book } from '../types/Book';
import type { Genre } from '../types/Genre';
import BookCard from '../components/BookCard';
import GenreFilter from '../components/GenreFilter';

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [search, setSearch] = useState('');
  const [selectedGenreId, setSelectedGenreId] = useState<number | undefined>();

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await getGenres();
      setGenres(data);
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks({ search, genreId: selectedGenreId });
      setBooks(data);
    };
    fetchBooks();
  }, [search, selectedGenreId]);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex-1 max-w-md">
          <input
            type="text"
            placeholder="🔍 Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            style={{marginBottom: "1rem"}}
          />
        </div>
        <Link
          to="/add"
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          style={{marginBottom: "1rem"}}
        >
          ➕ Add New Book
        </Link>
      </div>
      <GenreFilter genres={genres} selectedGenreId={selectedGenreId} onGenreSelect={setSelectedGenreId} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" style={{marginBottom: "1rem"}}>
        {books.length > 0 ? (
          books.map(book => <BookCard key={book.id} book={book} />)
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No books found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookList;