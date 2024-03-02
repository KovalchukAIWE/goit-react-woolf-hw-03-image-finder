import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ photos }) => {
  return (
    <ul className={styles.gallery}>
      {photos.map(photo => (
        <ImageGalleryItem key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};

export default ImageGallery;
