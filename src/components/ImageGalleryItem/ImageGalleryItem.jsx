import { Component } from 'react';
import { ItemCard, ImgCard, ImgModal } from './ImageGalleryItemStyle';
import CustomModal from 'components/Modal/CustomModal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  handlerClickImg = e => {
    this.setState({ showModal: true });
  };

  closeModal = e => {
    this.setState({ showModal: false });
  };

  render() {
    const { src, href } = this.props;
    const { closeModal, state } = this;
    return (
      <>
        <ItemCard onClick={this.handlerClickImg}>
          <ImgCard src={src} alt="" />
        </ItemCard>
        <CustomModal isShowModal={state.showModal} onClose={closeModal}>
          <ImgModal src={href} alt="" />
        </CustomModal>
      </>
    );
  }
}
