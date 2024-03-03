import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ photos, onOpenModal }) => {
  return (
    <ul className={styles.gallery}>
      {photos.map(photo => (
        <ImageGalleryItem
          key={photo.id}
          photo={photo}
          onOpenModal={onOpenModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
