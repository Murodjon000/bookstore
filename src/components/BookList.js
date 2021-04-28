import React from 'react';
import PropTypes from 'prop-types';
import BookContainer from '../containers/BookContainer';
import CategoryFilter from './CategoryFilter';

const BookList = (
  { books, handleRemoveBook, filter, filterBook } //eslint-disable-line
) => (
  <div>
    <CategoryFilter filter={filter} handleFilterChange={filterBook} />

    <div className="books__container">
      {books.map((book) => (
        <BookContainer
          id={book.id}
          title={book.title}
          category={book.category}
          key={book.id}
          handleRemoveBook={handleRemoveBook}
        />
      ))}
    </div>
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  handleRemoveBook: PropTypes.func,
  filterBook: PropTypes.func,
  filter: PropTypes.string,
};

BookList.defaultProps = {
  books: [],
  handleRemoveBook: null,
  filterBook: null,
  filter: 'All',
};

export default BookList;
