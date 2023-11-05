import { Gallery } from './ImageGalleryStyle';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ arrayImages }) => {
  return (
    <>
      <Gallery>
        {arrayImages !== null &&
          arrayImages.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              src={webformatURL}
              href={largeImageURL}
            />
          ))}
      </Gallery>
    </>
  );
};
export default ImageGallery;
