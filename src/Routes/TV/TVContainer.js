import React from "react";
import TYPresenter from "./TVPresenter";
import { tvApi } from "api";

class TVContainer extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true,
  };

  // componentWillMount를 통해 컴포넌트가 생성되고 난 후 실행시킬 코드를 안에 넣어준다.
  async componentDidMount() {
    // try,catch,finally처리를 해주고 tvApi에서 topRated()함수를 실행해서 api를 통해 데이터를 가져오도록 한다.
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

      // console.log(topRated, popular, airingToday);

      // throw Error();

      this.setState({
        topRated,
        popular,
        airingToday,
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
    const { topRated, popular, airingToday, error, loading } = this.state;
    // console.log(this.state);

    return <TYPresenter topRated={topRated} popular={popular} airingToday={airingToday} error={error} loading={loading} />;
  }
}

export default TVContainer;
