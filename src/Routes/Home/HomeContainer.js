import React from "react";
import HomePresenter from "./HomePresenter";
import { homeApi } from "api";

class HomeContainer extends React.Component {
  state = {
    movieDetail: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const { data: movieDetail } = await homeApi.movieDetail(497698);

      this.setState({
        movieDetail,
      });
    } catch (error) {
      console.log(error);

      this.setState({
        error: "Can't find Home Video.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { movieDetail, error, loading } = this.state;
    // console.log(this.state);

    return <HomePresenter movieDetail={movieDetail} error={error} loading={loading} />;
  }
}

export default HomeContainer;
