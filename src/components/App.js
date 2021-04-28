import React from 'react';
import BookListContainer from '../containers/BookListContainer';
import BooksFormContainer from '../containers/BooksFormContainer';
import Header from './Header';

const App = () => (
  <div>
    <BookListContainer />
    <BooksFormContainer />
  </div>
);

export default App;
