import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';


// basics for this were taken from https://www.npmjs.com/package/react-modal website
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.switchMode = this.switchMode.bind(this);
  }

  switchMode() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="modal-pop-up">
        <button onClick={this.switchMode}>
          open me!!
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.switchMode}
        >
          Content of modal
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
