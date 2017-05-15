import React from 'react';
// import Modal from 'react-bootstrap-modal';


// explanation and modal concepts taken from https://daveceddia.com/open-modal-in-react/
class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }


    return (
      <div id="backdrop">
        <div id="modal">
          {this.props.children}
          <div id="footer">
            <button onClick={this.props.onClose}>
              Close the modal
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: React.PropTypes.func.isRequired,
};

export default Modal;
