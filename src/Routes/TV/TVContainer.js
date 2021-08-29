import React from "react";
import TYPresenter from "./TVPresenter";
import { tvApi } from "api";

class TVContainer extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    onTheAir: null,
    error: null,
    loading: true,
    popularInfinite: null,
    airingTodayInfinite: null,
    onTheAirInfinite: null,
    topRatedInfinite: null,
  };

  // componentDidMount를 통해 컴포넌트가 생성되고 난 후 실행시킬 코드를 안에 넣어준다.
  async componentDidMount() {
    // try, catch, finally처리를 해주고 tvApi객체에서 topRated()함수를 실행해서 api를 통해 데이터를 가져오도록 한다.
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();

      const {
        data: { results: popular },
      } = await tvApi.popular();

      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();

      const {
        data: { results: onTheAir },
      } = await tvApi.onTheAir();

      const {
        data: { results: popularInfinite },
      } = await tvApi.popularInfinite();

      const {
        data: { results: airingTodayInfinite },
      } = await tvApi.airingTodayInfinite();

      const {
        data: { results: onTheAirInfinite },
      } = await tvApi.onTheAirInfinite();

      const {
        data: { results: topRatedInfinite },
      } = await tvApi.topRatedInfinite();

      this.setState({
        topRated,
        popular,
        airingToday,
        onTheAir,
        popularInfinite,
        airingTodayInfinite,
        onTheAirInfinite,
        topRatedInfinite,
      });
    } catch {
      this.setState({
        error: "Can't find TV Information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { topRated, popular, airingToday, onTheAir, error, loading, popularInfinite, airingTodayInfinite, onTheAirInfinite, topRatedInfinite } = this.state;

    return (
      <TYPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        onTheAir={onTheAir}
        error={error}
        loading={loading}
        popularInfinite={popularInfinite}
        airingTodayInfinite={airingTodayInfinite}
        onTheAirInfinite={onTheAirInfinite}
        topRatedInfinite={topRatedInfinite}
      />
    );
  }
}

export default TVContainer;
