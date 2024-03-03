import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ photo, onOpenModal }) => {
  return (
    <li
      className={styles.galleryItem}
      onClick={() =>
        onOpenModal({
          isOpenModal: false,
          modalImage: photo.webformatURL,
          imageAlt: photo.alt,
        })
      }
    >
      <img
        className={styles.galleryItemImage}
        src={photo.webformatURL}
        alt={photo.alt}
      />
    </li>
  );
};

export default ImageGalleryItem;
