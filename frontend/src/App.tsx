import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import BookList from './pages/BookList';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/add" element={<AddBook />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
