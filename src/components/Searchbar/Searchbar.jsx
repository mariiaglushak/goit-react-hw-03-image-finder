import { Component } from 'react';

import { SearchBox, SearchForm, SearchInput } from './SearchbarStyle';
import searchIkon from '../../images/search.svg';

export default class Searchbar extends Component {
  state = {
    name: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <SearchBox class="searchbar">
        <SearchForm onSubmit={this.handleSubmit} class="form">
          <button type="submit" class="button">
            <span class="button-label">
              Search
              <img src={searchIkon} alt="" />
            </span>
          </button>

          <SearchInput
            class="input"
            type="text"
            value={this.state.name}
            autocomplete="off"
            autofocus
            placeholder=""
            onChange={this.handleNameChange}
          />
        </SearchForm>
      </SearchBox>
    );
  }
}
