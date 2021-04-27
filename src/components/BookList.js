import React from 'react';
import PropTypes from 'prop-types';
import BookContainer from '../containers/BookContainer';

const BookList = ({ books, removeBook }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <BookContainer
            id={book.id}
            title={book.title}
            category={book.category}
            key={book.id}
            removeBook={removeBook}
          />
        ))}
      </tbody>
    </table>
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  removeBook: PropTypes.func,
};

BookList.defaultProps = {
  books: [],
  removeBook: null,
};

export default BookList;
