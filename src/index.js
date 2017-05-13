import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import NewCategory from './components/new_category';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      link: 'Hello',
      links: ['link1', 'link2', 'link3', 'link4'],
    };
  }

  render() {
    return (
      <NewCategory links={this.state.links} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
