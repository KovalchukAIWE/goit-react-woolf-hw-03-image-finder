import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getPhotos } from 'service/service-images';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

class App extends Component {
  state = {
    searchText: '',
    page: 1,
    photos: [],
    isEmpty: false,
    showButton: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchText, page } = this.state;
    if (searchText !== prevState.searchText || page !== prevState.page) {
      getPhotos(searchText, page).then(({ hits, totalHits }) => {
        if (!hits.length) {
          this.setState({ isEmpty: true });
        }
        this.setState(prevState => ({
          photos: [...prevState.photos, ...hits],
          showButton: page < Math.ceil(totalHits / 12),
        }));
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
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { photos, showButton, isEmpty } = this.state;
    return (
      <div>
        <Searchbar handleSubmit={this.handleSubmit} />
        {photos.length > 0 && <ImageGallery photos={photos} />}
        {showButton && (
          <Button onClick={this.handleLoadMore} text="Load more" />
        )}
        {isEmpty && <p>There are no photos...</p>}
      </div>
    );
  }
}

export default App;
