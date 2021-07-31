import React from "react";
import MoviePresenter from "./MoviePresenter";
import { moviesApi } from "api";

class MovieContainer extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    topRated: null,
    error: null,
    loading: true,
    nowPlaying2: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      // console.log(nowPlaying);

      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      // console.log(upcoming);

      const {
        data: { results: popular },
      } = await moviesApi.popular();
      // console.log(popular);

      const {
        data: { results: topRated },
      } = await moviesApi.topRated();

      const {
        data: { results: nowPlaying2 },
      } = await moviesApi.nowPlaying2();

      console.log("nowPlaying2", nowPlaying2);
      this.setState({
        nowPlaying,
        upcoming,
        popular,
        topRated,
        nowPlaying2,
      });
    } catch (error) {
      console.log(error);

      this.setState({
        error: "Can't find Movie Information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, topRated, error, loading, nowPlaying2 } = this.state;
    console.log(this.state);

    return <MoviePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} topRated={topRated} error={error} loading={loading} nowPlaying2={nowPlaying2} />;
  }
}

export default MovieContainer;
