import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

class HomeContainer extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    topRated: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      // console.log(nowPlaying);

      this.setState({
        nowPlaying,
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
    const { nowPlaying, upcoming, popular, topRated, error, loading } = this.state;

    console.log(this.state);

    return <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} topRated={topRated} error={error} loading={loading} />;
  }
}

export default HomeContainer;
