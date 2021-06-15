import React from "react";
import HomePresenter from "./HomePresenter";

class HomeContainer extends React.Component {
  // HomeContainer클래스를 생성하고 기본적인 state를 정의해줬다.
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading} />;
  }
}

export default HomeContainer;
