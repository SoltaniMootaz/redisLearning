import { Link } from 'react-router-dom';
import type { Book } from '../types/Book';

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Link to={`/books/${book.id}`} className="block">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 transform hover:-translate-y-1">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{book.title}</h3>
        <p className="text-gray-600 mb-1">by <span className="font-medium">{book.author}</span></p>
        <p className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full inline-block">{book.genre?.name || 'Unknown'}</p>
        <p className="text-xs text-gray-400 mt-2">Published: {book.publishedYear}</p>
      </div>
    </Link>
  );
};

export default BookCard;