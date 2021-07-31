import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

// 강의 내용과 다르게 Home디렉토리의 HomeContainer와 HomePresenter를 수정해서 원본 Home디렉토리의 파일을 따로 Home copy폴더에 복사해놓음
class HomeContainer extends React.Component {
  // HomeContainer클래스를 생성하고 기본적인 state를 정의해줬다.
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    topRated: null,
    error: null,
    loading: true,
    nowPlaying2: null,
  };

  // componentDidMount는 컴포넌트가 생성된 후 실행되는 함수이다.
  // try, catch, finally을 통해 try문에서 오류가 나지 않으면 try, finally문을 실행하고 try문에서 오류가 나면 catch문, finally문을 실행한다.
  // finally문은 try문에서 오류가 나던 나지 않던 마지막에 무조건 실행된다.
  async componentDidMount() {
    // api.js에서 만든 moviesApi객체를 가져와서 거기 안에 있는 nowPlaying함수를 실행한다.
    // nowPlaying함수는 api.get("movie/now_playing")를 실행하고 API를 호출해서 영화 정보를 가져온다.
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

      // throw Error()를 통해 의도적으로 에러를 던져서 catch문이 실행되도록 테스트해볼 수 있다.
      // throw Error();

      // 여기서 주의할 점은 아래에 console.log(this.state)가 3번 찍히게 된다.
      // 그 이유는 this.setState()함수가 실행이 되면! 리액트는 render()함수를 다시 실행하기 때문이다.
      // 그래서 컴포넌트가 생성되면서 1번째, 컴포넌트가 생성된 후 try문을 실행하면서 2번째, finally문을 실행하면서 3번째 실행이 되는 것이다.
      // 단 리액트는 모든 것을 리랜더링하는 것이 아니라 바뀐 부분만 찾아서 리랜더링한다.
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
    // console.log(this.state);

    console.log(this.state);

    return <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} topRated={topRated} error={error} loading={loading} nowPlaying2={nowPlaying2} />;
  }
}

export default HomeContainer;
