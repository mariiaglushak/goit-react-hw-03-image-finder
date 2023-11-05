import { Component } from 'react';
import Modal from 'react-modal';
import { customStyles } from './CustomModalStyle';
Modal.setAppElement('#root');

export default class CustomModal extends Component {
  closeModal = () => {
    const { onClose } = this.props;
    onClose();
  };

  render() {
    const { children, isShowModal } = this.props;
    return (
      <Modal
        isOpen={isShowModal}
        onRequestClose={this.closeModal}
        style={customStyles}
      >
        {children}
      </Modal>
    );
  }
}
