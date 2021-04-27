import { connect } from 'react-redux';
import { removeBook } from '../actions/index';
import BookList from '../components/BookList';
import { filterBook } from '../actions/index';

const getBooks = (books, filter) => {
  if (filter === 'All') {
    return books;
  }
  return books.filter((book) => book.category === filter);
};

const mapStateToProps = (state) => ({
  books: getBooks(state.books, state.filter),
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  handleRemoveBook: (id) => dispatch(removeBook(id)),
  filterBook: (category) => dispatch(filterBook(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
