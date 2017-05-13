import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Category from './components/category';
import Modal from './Modal';

import './style.scss';
import NewCategory from './components/new_category';


// basics for this were taken from https://www.npmjs.com/package/react-modal website

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      link: 'Hello',
      links: ['link1', 'link2', 'link3', 'link4'],
      isOpen: false,
    };
    this.switchMode = this.switchMode.bind(this);
  }

  switchMode() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <div className="test">Banner Home</div>
        <div className="modal-pop-up">
          <button onClick={this.switchMode}>
            open me!!
          </button>

          <Modal show={this.state.isOpen}
            onClose={this.switchMode}
          >
            <Category />
            <NewCategory links={this.state.links} />
          </Modal>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('main'));
