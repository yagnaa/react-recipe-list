import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
    //  this.props.onSearchTermChanged(event.target.value);
  }

  onFormSubmit(event) {
    event.preventDefault();
    var newString = this.state.term.replace(/[ ,]+/g, ',');
    console.log('On form submit', newString);

    this.props.onSearchTermEntered([this.state.term]);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group search-bar">
        <input className="form-control" value={this.state.term} onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onSearchTermEntered: PropTypes.func.isRequired,
};

export default SearchBar;
