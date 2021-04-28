import React from 'react';
import PropTypes from 'prop-types';

const Book = (
  { id, title, category, handleRemoveBook } // eslint-disable-line
) => (
  <div className="book__wrapper">
    <div className="book__wrapper_left">
      <h3>{category}</h3>
      <h2>{title}</h2>
      <p className="text-link ">Utkir Khashimov </p>
      <div className="book__wrapper_left_bottom">
        <button className="text-link " type="button">
          Comments
        </button>
        <span className="line-border" />
        <button
          className="text-link"
          type="button"
          onClick={() => handleRemoveBook(id)}
        >
          Remove
        </button>
        <span className="line-border" />
        <button className="text-link " type="button">
          Edit
        </button>
      </div>
    </div>

    <div className="book__wrapper_right">
      <div className="book__wrapper_right-chart">
        <div className="chart-graph" />
        <div className="book__wrapper_right-chart-info">
          <h1>64%</h1>
          <p>Completed</p>
        </div>
      </div>
      <div className="book__wrapper_right-info">
        <div>Current Chapter</div>
        <h3>Chapter 17</h3>
        <button className="primary-btn" type="button" disabled>
          Update Progress
        </button>
      </div>
    </div>
  </div>
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
