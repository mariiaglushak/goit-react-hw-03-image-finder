import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { requestFetch } from 'Api/request';
import ImageGallery from './ImageGallery/ImageGallery';

import Button from './Button/Button';
import Loader from './Loader/Loader';

export default class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    isLoading: false,
    modalIsOpen: false,
  };

  handerFormSubmit = answer => {
    this.setState({ query: answer });
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (nextPage !== prevPage || nextQuery !== prevQuery) {
      this.setState({ isLoading: true });

      const dataFromSerwer = await requestFetch(nextQuery, nextPage);

      try {
        const { data } = dataFromSerwer;

        this.setState(({ images }) => ({
          images: [...images, ...data.hits],
        }));

        if (prevQuery !== nextQuery) {
          this.setState({ page: 1 });
          this.setState({ images: [...data.hits] });
        }
        if (data.totalHits > 12) {
          this.setState({ loadMoreWisible: true });
        }

        if (data.hits.length === 0 && data.totalHits !== 0) {
          alert('фото закінчились');
          this.setState({ loadMoreWisible: false });
        }

        if (data.totalHits <= 12) {
          this.setState({ loadMoreWisible: false });
        }

        if (data.totalHits === 0) {
          alert('за вашим запитом нічого не знайдено');
        }
      } catch (err) {
        console.log(err);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handlerBtnLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { handerFormSubmit, handlerBtnLoadMore, state } = this;

    return (
      <>
        <Searchbar handerSubmit={handerFormSubmit}></Searchbar>

        <ImageGallery arrayImages={state.images}></ImageGallery>
        {state.isLoading && <Loader />}
        {state.loadMoreWisible ? (
          <Button onClick={handlerBtnLoadMore} text="Load more"></Button>
        ) : null}
      </>
    );
  }
}
