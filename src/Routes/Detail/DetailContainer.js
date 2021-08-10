import React from "react";
import { moviesApi, tvApi } from "api";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends React.Component {
  // constructor함수안에 state를 넣어서 관리할 수도 있다.
  // constructor함수안에 들어가게 되면 state앞에 this를 붙여줘야 한다.
  constructor(props) {
    super(props);

    const {
      location: { pathname },
    } = props;

    // includes()메서드를 이용해서 ()괄호안에 값이 포함되는지를 검사한다.
    // 포함된다면 true, 포함되지 않았다면 false를 반환한다.
    // isMovie를 state안에 넣어서 관리할 수도 있고, state밖에서 this.isMovie=pathname.includes("/movie/")를 통해 생성해서 관리할 수도 있다.
    this.state = {
      result: null,
      error: null,
      lodaing: true,
      isMovie: pathname.includes("/movie/"),
      recommendations: null,
      cast: null,
      keywords: null,
      reviews: null,
      changes: null,
    };
  }

  async componentDidMount() {
    // react-router-dom은 기본적으로 각각의 라우트들에게 props에 대한 정보를 준다.
    // this.props안에 match객체안에 params 프로퍼티에는 /movie/:id 에서 :id에 들어가있는 값이 담겨져 있다.
    // 리다이렉트 기능을 가지고 있는 push메서드를 사용하기 위해 history객체에서 가져왔다.
    const {
      match: {
        params: { id },
      },
      history: { push },
      location: { pathname },
    } = this.props;

    // parseInt()함수를 통해 id를 숫자로 변환한다.
    const parsedId = parseInt(id);

    // isNaN()함수는 ()괄호안의 인자가 NaN인지 아닌지를 판별해서 NaN이라면 true를 아니라면 false를 반환한다.
    // 만약 parsedId가 숫자가 아닌 문자여서 NaN이라면 push("/")함수를 통해 / 경로로 리다이렉트 시켜버린다.
    if (isNaN(parsedId)) {
      push("/");

      // 주의! push()를 해준 후 return을 해줘야 함수가 종료되서 아래 콘솔로그 코드가 실행되지 않는다.
      return;
    }
    // console.log("abc");

    let result = null;
    const { isMovie } = this.state;

    // isMovie는 url주소에 /movie/가 존재하는지 확인하는 변수로 url주소에 /movie/가 존재하면 true를 반환하고 아니라면 false를 반환한다.
    // 그래서 만약 /movie/면 true를 /tv/면 false를 반환한다.
    // isMovie가 true라면 try문안에 if문을 실행해서 moviesApi.movieDetail()를 통해 /movie/123같은 주소로 api.get()를 실행한다.
    try {
      if (isMovie) {
        // const request = await moviesApi.movieDetail(parsedId);
        // result = request.data;

        // 위의 코드를 ES6문법에 따라 아래와 같이도 쓸 수 있다.
        // 전체에 ()괄호를 쳐주고 {}를 통해 data프로퍼티를 바로 뽑아올 수 있다.
        // 전체에 ()괄호를 쳐주게 되면 바로 객체 안으로 들어가게 되고 거기에 data프로퍼티를 뽑아와서 그 data프로퍼티의 이름을 result로 변경한 것이다.
        // ()괄호를 쳐주게 되면 ({data:  result} = await moviesApi.movieDetail(parsedId)); 는 const = {data : result}와 같은 의미이다.
        ({ data: result } = await moviesApi.movieDetail(parsedId));

        const {
          data: { results: similarMovies },
        } = await moviesApi.similarMovies(parsedId);
        // console.log(similarMovies);

        const {
          data: { results: recommendations },
        } = await moviesApi.recommendations(parsedId);
        // console.log(recommendations);

        const {
          data: { cast },
        } = await moviesApi.credits(parsedId);
        // console.log(cast);

        const {
          data: { keywords },
        } = await moviesApi.keywords(parsedId);
        // console.log(keywords);

        const {
          data: { results: reviews },
        } = await moviesApi.reviews(parsedId);
        // console.log(reviews);

        const {
          data: { changes },
        } = await moviesApi.changes(parsedId);

        this.setState({
          recommendations,
          cast,
          keywords,
          reviews,
          changes: changes.length > 0 && changes[2].items,
        });
      } else {
        // const request = await tvApi.tvDetail(parsedId);
        // result = request.data;

        ({ data: result } = await tvApi.tvDetail(parsedId));
      }

      // console.log("result", result);
    } catch (error) {
      console.log(error);

      this.setState({ error: "Can't find Anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading, isMovie, recommendations, cast, keywords, reviews, changes } = this.state;
    // console.log(this.state);

    return <DetailPresenter result={result} error={error} loading={loading} isMovie={isMovie} recommendations={recommendations} cast={cast} keywords={keywords} reviews={reviews} changes={changes} />;
  }
}

export default DetailContainer;
