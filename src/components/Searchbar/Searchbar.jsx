import { Component } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

import {
  SearchBox,
  SearchForm,
  SearchInput,
  SearchBtn,
} from './SearchbarStyle';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleNameChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      return;
    }
    this.props.handerSubmit(this.state.query);
    console.dir(this.props);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchBox>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <BiSearchAlt2 />
          </SearchBtn>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleNameChange}
          />
        </SearchForm>
      </SearchBox>
    );
  }
}
