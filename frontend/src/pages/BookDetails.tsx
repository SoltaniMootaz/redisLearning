import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBook } from '../api/booksApi';
import type { Book } from '../types/Book';

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchBook = async () => {
        setLoading(true);
        try {
          const data = await getBook(parseInt(id));
          setBook(data);
        } catch (error) {
          console.error('Error fetching book:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchBook();
    }
  }, [id]);

  if (loading) return (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );

  if (!book) return (
    <div className="text-center py-12">
      <p className="text-gray-500 text-lg">Book not found.</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{book.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-xl text-gray-600 mb-3">
              <span className="font-semibold">Author:</span> {book.author}
            </p>
            <p className="text-xl text-gray-600 mb-3">
              <span className="font-semibold">Published Year:</span> {book.publishedYear}
            </p>
            <p className="text-xl text-gray-600 mb-3">
              <span className="font-semibold">Genre:</span>
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full ml-2 text-sm font-medium">
                {book.genre?.name}
              </span>
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Book Information</h3>
            <p className="text-gray-600">ID: {book.id}</p>
            <p className="text-gray-600">Genre ID: {book.genreId}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📖 Reviews</h2>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <p className="text-gray-500 text-lg">Reviews section placeholder - no logic needed yet.</p>
          <p className="text-gray-400 mt-2">Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;