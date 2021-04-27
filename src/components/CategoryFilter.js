import React from 'react';
import category from '../helper/category';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filter, handleFilterChange }) => {
  const categories = ['All', ...category];
  return (
    <div>
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

export default CategoryFilter;
