const defaultBooks = [];

const booksReducer = (state = defaultBooks, action) => {
  if (action.type === 'CREATE_BOOK') {
    const { book } = action.payload;
    return [...state, book];
  }

  if (action.type === 'REMOVE_BOOK') {
    const { id } = action.payload;
    return state.filter((book) => book.id !== id);
  }
  return state;
};

export default booksReducer;
