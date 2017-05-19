import React from 'react';
import Immutable from 'immutable';
// Import css
// import Modal from 'react-bootstrap-modal';
// import Category from './category';
import * as firebasedb from '../firebasedb';


// explanation and modal concepts taken from https://daveceddia.com/open-modal-in-react/
class AllTheLinks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      wantsToCancel: false,
      links: [],
    };
    this.switchMode = this.switchMode.bind(this);
    this.wantsToCancel = this.wantsToCancel.bind(this);
    this.showTheLinksMan = this.showTheLinksMan.bind(this);
  }
  componentDidMount() {
    firebasedb.fetchAllLinks((links) => {
      const links_for_adding = [];
      for (const i in links) {
        links_for_adding.push(links[i]);
      }

      this.setState({ links: links_for_adding });
    });
  }
  switchMode() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  wantsToCancel() {
    this.setState({
      wantsToCancel: true,
    });
  }
  showTheLinksMan() {
    if (this.state.links) {
      return (
      this.state.links.map((item) => {
        return (
          <div className="modal-links">
            <a id="listy" href={item.link}>{item.name}</a>
          </div>
        );
      })
      );
    }
  }

  render() {
   // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

   // will export this to style.scss later
   // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50,
    };

   // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30,
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          <div className="new-category">
            <h2 id="yo">All Banner Links</h2>
            <div id="modal-links-all">
              {this.showTheLinksMan()}
            </div>
          </div>
          <div className="container">
            <button id="close-modal" onClick={this.props.onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

AllTheLinks.propTypes = {
  onClose: React.PropTypes.func.isRequired,
};

export default AllTheLinks;
