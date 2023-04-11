import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Error from './pages/Error';
import BooksView from './features/books/BooksView';
import AddBook from './features/books/AddBook';
import EditBooks from './features/books/EditBooks';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route>
            <Route path="/" element={<BooksView />} />
            {/* <Route path="/show-books" element={<BooksView />} /> */}
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/edit-book" element={<EditBooks />} />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
