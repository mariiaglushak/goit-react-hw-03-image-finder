import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { requestFetch } from 'Api/request';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export default class App extends Component {
  state = {
    page: null,
    query: '',
    images: [],
    isLoading: false,
    loadMoreWisible: false,
  };

  handerFormSubmit = query => {
    this.setState({ query: query });
  };
  handlerBtnLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log(this.state.page, 'наступна сторінка');
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.setState({ isLoading: true });
      console.log('hello world');
      const dataFromSerwer = await requestFetch(
        this.props.query,
        this.props.page
      );
      console.log(dataFromSerwer.data);
      // const { data } = dataFromSerwer;
      const { hits } = dataFromSerwer.data;
      // if (prevProps.query !== this.props.query) {
      //   this.setState({ page: 1 });
      // }
      try {
        this.setState(({ images }) => ({
          images: [...images, ...hits],

          loadMoreWisible: true,
        }));
        if (hits.length === 0) {
          alert('за вашим запитом нічого не знайдено');
        }

        // this.handlerButton(
        //   this.setState(prevState => ({ images: [...prevState], ...hits }))
        // );
      } catch (err) {
        console.log(err, 'vb');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handerFormSubmit}></Searchbar>

        <ImageGallery>
          <ImageGalleryItem array={this.state.images}></ImageGalleryItem>
        </ImageGallery>
        {this.state.isLoading && <Loader />}
        {this.state.loadMoreWisible ? (
          <Button onClick={this.handlerBtnLoadMore} text="Load more"></Button>
        ) : null}
      </>
    );
  }
}
