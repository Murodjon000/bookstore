import React, { Component } from 'react';
import PropTypes from 'prop-types';
import categories from '../helper/category';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  get isValid() {
    const { title, category } = this.state;
    return title && category;
  }

  get isInValid() {
    return !this.isValid;
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createBook } = this.props;

    if (this.isInValid) return;

    if (createBook) {
      createBook(this.state);
    }

    this.setState({
      title: '',
      category: '',
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="form__wrapper">
        <hr className="form__wrapper-line" />
        <h1>Add new book</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Book title"
            name="title"
            value={title}
          />
          <select name="category" value={category} onChange={this.handleChange}>
            {categories.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <input
            type="submit"
            value="Create a book"
            disabled={this.isInValid}
            className="primary-btn"
          />
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func,
};

BooksForm.defaultProps = {
  createBook: null,
};

export default BooksForm;
