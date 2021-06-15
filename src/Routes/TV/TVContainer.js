import React from "react";
import TYPresenter from "./TVPresenter";

class TVContainer extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    lodaing: true,
  };

  render() {
    const { topRated, popular, airingToday, error, loading } = this.state;
    return <TYPresenter topRated={topRated} popular={popular} airingToday={airingToday} error={error} loading={loading} />;
  }
}

export default TVContainer;
