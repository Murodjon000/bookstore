import { connect } from 'react-redux';
import { removeBook } from '../actions/index';
import Book from '../components/Book';

export default connect(null, { removeBook })(Book);
