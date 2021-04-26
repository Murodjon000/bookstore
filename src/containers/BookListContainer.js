import { connect } from 'react-redux';
import { removeBook } from '../actions/index';
import BookList from '../components/BookList';

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBook: (id) => dispatch(removeBook(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
