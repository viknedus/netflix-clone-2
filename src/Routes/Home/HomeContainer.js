import React from "react";
import HomePresenter from "./HomePresenter";
import api, { moviesApi } from "api";

class HomeContainer extends React.Component {
  // HomeContainer클래스를 생성하고 기본적인 state를 정의해줬다.
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  // componentWillMount는 컴포넌트가 생성된 후 실행되는 함수이다.
  // try,catch,finally를 통해 try문을 실행하고 finally문을 실행하거나 try문에서 오류가 나면 catch문을 실행하고 finally문을 실행한다.
  async componentDidMount() {
    // api.js에서 만든 moviesApi를 가져와서 거기안에 있는 nowPlaying함수를 실행한다.
    // nowPlaying함수는 api.get("movie/now_playing")를 하고 API 정보를 가져온다.
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

      // throw Error()를 통해 의도적으로 에러를 던져서 catch문이 실행되도록 테스트해볼 수 있다.
      throw Error("에러 발생");

      // 여기서 주의할 점은 아래에 console.log(this.state)가 3번 찍히게 된다.
      // 그 이유는 this.setState()함수가 실행이 되면! 리액트는 render()함수를 다시 실행하기 때문이다.
      // 그래서 최초의 1번째, 컴포넌트가 생성된 후 try문을 실행하면서 2번째, finally문을 실행하면서 3번째 실행이 되는 것이다.
      // 단 리액트는 모든 것을 리 랜더링하는 것이 아니라 바뀐 부분만 찾아서 리 랜더링한다.
      // eslint-disable-next-line no-unreachable
      this.setState({
        nowPlaying,
        upcoming,
        popular,
      });
    } catch (error) {
      this.setState({
        error: "Can't Get Movies Information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    console.log(this.state);

    return <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading} />;
  }
}

export default HomeContainer;
