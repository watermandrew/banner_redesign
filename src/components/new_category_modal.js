 import React from 'react';
 // Import css
// import Modal from 'react-bootstrap-modal';
 import NewCategory from './new_category';


// explanation and modal concepts taken from https://daveceddia.com/open-modal-in-react/
 class NewModal extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       isOpen: false,
       wantsToCancel: false,
     };
     this.switchMode = this.switchMode.bind(this);
     this.wantsToCancel = this.wantsToCancel.bind(this);
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
           <NewCategory links={this.props.links} create={this.props.create} onClose={this.props.onClose} />
         </div>
       </div>
     );
   }
}

 NewModal.propTypes = {
   onClose: React.PropTypes.func.isRequired,
 };

 export default NewModal;
