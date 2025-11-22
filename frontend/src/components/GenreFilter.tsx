import type { Genre } from '../types/Genre';

interface GenreFilterProps {
  genres: Genre[];
  selectedGenreId?: number;
  onGenreSelect: (genreId?: number) => void;
}

const GenreFilter = ({ genres, selectedGenreId, onGenreSelect }: GenreFilterProps) => {
  return (
    <div className="mb-6 flex flex-wrap gap-2" style={{marginBottom: "1rem"}}>
      <button
        onClick={() => onGenreSelect()}
        className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
          !selectedGenreId
            ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700'
            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
        }`}
      >
        All Genres
      </button>
      {genres.map(genre => (
        <button
          key={genre.id}
          onClick={() => onGenreSelect(genre.id)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
            selectedGenreId === genre.id
              ? 'bg-indigo-600 text-white shadow-md hover:bg-indigo-700'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;