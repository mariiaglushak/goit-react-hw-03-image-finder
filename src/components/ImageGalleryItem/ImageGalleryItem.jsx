// import { Component } from 'react';
// import { requestFetch } from 'Api/request';
import { ItemCard, ImgCard } from './ImageGalleryItemStyle';

const ImageGalleryItem = ({ href, src }) => {
  return (
    <>
      <ItemCard>
        <a href={href}>
          <ImgCard src={src} alt="" />
        </a>
      </ItemCard>
    </>
  );
};
export default ImageGalleryItem;
