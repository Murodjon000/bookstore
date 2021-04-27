import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];

    const { title, category } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Please fill book name."
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
