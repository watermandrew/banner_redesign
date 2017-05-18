import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from 'react-bootstrap-modal';


// explanation and modal concepts taken from https://daveceddia.com/open-modal-in-react/
class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

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
      <div id="backdrop" style={backdropStyle}>
        <div id="modal" style={modalStyle}>
          {this.props.children}
          <div id="footer">
            <Link to={'/home'}><button id="pay-button-ok" onClick={this.props.onClose} >Ok!</button></Link>
          </div>
        </div>
      </div>
    );
  }
}


export default Modal;
