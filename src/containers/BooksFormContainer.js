import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import BooksForm from '../components/BooksForm';

export default connect(null, { createBook })(BooksForm);
