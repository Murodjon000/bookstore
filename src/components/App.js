import React from 'react';
import BookListContainer from '../containers/BookListContainer';
import BooksFormContainer from '../containers/BooksFormContainer';

const App = () => {
  return (
    <div>
      <BookListContainer />
      <BooksFormContainer />
    </div>
  );
};

export default App;
