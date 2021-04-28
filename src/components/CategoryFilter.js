import React from 'react';
import PropTypes from 'prop-types';
import category from '../helper/category';

const CategoryFilter = ({ filter, handleFilterChange }) => {
  const categories = ['All', ...category];
  return (
    <div className="filter__wrapper">
      <select
        name="category"
        value={filter}
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        {categories.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.string,
  handleFilterChange: PropTypes.func,
};

CategoryFilter.defaultProps = {
  filter: 'All',
  handleFilterChange: null,
};

export default CategoryFilter;
