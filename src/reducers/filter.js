const filterBook = (state = 'All', action) => {
  if (action.type === 'CHANGE_FILTER') {
    return action.value;
  }
  return state;
};

export default filterBook;
