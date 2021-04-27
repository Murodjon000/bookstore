import React from 'react';
import PropTypes from 'prop-types';
import BookContainer from '../containers/BookContainer';

const BookList = ({ books, handleRemoveBook }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove Book</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <BookContainer
            id={book.id}
            title={book.title}
            category={book.category}
            key={book.id}
            handleRemoveBook={handleRemoveBook}
          />
        ))}
      </tbody>
    </table>
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  handleRemoveBook: PropTypes.func,
};

BookList.defaultProps = {
  books: [],
  handleRemoveBook: null,
};

export default BookList;
