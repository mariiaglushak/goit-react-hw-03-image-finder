// import { Component } from 'react';
// import { requestFetch } from 'Api/request';
import { ItemCard, ImgCard } from './ImageGalleryItemStyle';

const ImageGalleryItem = ({ array }) => {
  // state = {
  //   images: [],
  //   query: '',
  //   isLoading: false,
  //   error: null,
  // };
  console.log(array, 'hh');
  return (
    <>
      {array !== null &&
        array.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ItemCard key={id}>
              <a href={webformatURL}>
                <ImgCard src={largeImageURL} alt="" />
              </a>
            </ItemCard>
          );
        })}
    </>
  );
};
export default ImageGalleryItem;
