import { connect } from 'react-redux';
import { removeBook } from '../actions/index';
import BookList from '../components/BookList';

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => dispatch(removeBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
