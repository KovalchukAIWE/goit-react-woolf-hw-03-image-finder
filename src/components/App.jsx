import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getPhotos } from 'service/service-images';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import styles from './App.module.css';

class App extends Component {
  state = {
    searchText: '',
    page: 1,
    photos: [],
    isEmpty: false,
    showButton: false,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchText, page } = this.state;
    if (searchText !== prevState.searchText || page !== prevState.page) {
      this.setState({ isLoading: true });
      getPhotos(searchText, page)
        .then(({ hits, totalHits }) => {
          if (!hits.length) {
            this.setState({ isEmpty: true });
            return;
          }
          this.setState(prevState => ({
            photos: [...prevState.photos, ...hits],
            showButton: page < Math.ceil(totalHits / 12),
          }));
        })
        .catch()
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleSubmit = searchText => {
    this.setState({
      searchText,
      page: 1,
      photos: [],
      isEmpty: false,
      showButton: false,
      isOpenModal: false,
      modalImage: '',
      imageAlt: '',
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleOpenModal = ({ modalImage, imageAlt }) => {
    this.setState({ isOpenModal: true, modalImage, imageAlt });
  };

  handleCloseModal = () => {
    this.setState({ isOpenModal: false, modalImage: '', imageAlt: '' });
  };

  render() {
    const {
      photos,
      showButton,
      isEmpty,
      isLoading,
      isOpenModal,
      modalImage,
      imageAlt,
    } = this.state;
    return (
      <div className={styles.app}>
        <Searchbar handleSubmit={this.handleSubmit} />
        {photos.length > 0 && (
          <ImageGallery photos={photos} onOpenModal={this.handleOpenModal} />
        )}
        {showButton && (
          <Button onClick={this.handleLoadMore} text="Load more" />
        )}
        {isEmpty && <p className={styles.text}>There are no photos...</p>}
        {isLoading && <Loader />}
        {isOpenModal && (
          <Modal
            img={modalImage}
            src={imageAlt}
            onClose={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

export default App;
