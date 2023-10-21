import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

export default class App extends Component {
  state = {
    name: '',
  };

  handerFormSubmit = name => {
    console.log(name);
    this.setState({ name });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handerFormSubmit} />
      </>
    );
  }
}
