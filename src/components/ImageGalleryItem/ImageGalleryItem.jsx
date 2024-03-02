import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ photo }) => {
  return (
    <li className={styles.galleryItem}>
      <img
        className={styles.galleryItemImage}
        src={photo.webformatURL}
        alt={photo.alt}
      />
    </li>
  );
};

export default ImageGalleryItem;
