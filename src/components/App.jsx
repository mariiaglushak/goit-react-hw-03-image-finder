import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { requestFetch } from 'Api/request';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export default class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    isLoading: false,
    loadMoreWisible: false,
  };

  handerFormSubmit = ({ query }) => {
    this.setState({ query });
  };

  async componentDidUpdate(prevProps, prevState) {
    // if (prevState.query !== this.state.query) {
    //   this.setState({ page: 1 });
    //   console.log(this.state.page);
    // }
    // if (prevProps.query !== this.props.query) {
    //   this.setState({ page: 1 });
    // }
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
      console.log(dataFromSerwer);

      try {
        const { data } = dataFromSerwer;
        // const { data } = dataFromSerwer.data;
        // this.setState(({ images }) => ({
        //   images: [...images, ...hits],
        //   loadMoreWisible: true,
        // }));
        this.setState({ images: data.hits });

        if (data.hits.length === 0) {
          alert('за вашим запитом нічого не знайдено');
        }
        // this.handlerButton(
        //   this.setState(prevState => ({ images: [...prevState], ...hits }))
        // );
        // if (data.totalHits > 12) {
        //   this.setState(prevState => ({
        //     images: [...prevState.images, ...data.hits],
        //     loadMoreWisible: true,
        //   }));
        // }
      } catch (err) {
        console.log(err, 'vb');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  handlerBtnLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log(this.state.page, 'наступна сторінка');
  };

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
