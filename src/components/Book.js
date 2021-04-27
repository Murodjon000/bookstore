import React from 'react';
import PropTypes from 'prop-types';

const Book = (
  { id, title, category, handleRemoveBook } // eslint-disable-line
) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td>
      <button type="button" onClick={() => handleRemoveBook(id)}>
        Remove
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  handleRemoveBook: PropTypes.func,
};

Book.defaultProps = {
  id: null,
  title: '',
  category: '',
  handleRemoveBook: null,
};

export default Book;
