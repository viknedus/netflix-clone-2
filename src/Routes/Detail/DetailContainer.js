import React from "react";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends React.Component {
  state = {
    result: null,
    error: null,
    lodaing: true,
  };

  async componentDidMount() {
    // react-router-dom은 기본적으로 각각의 라우트들에게 props에 대한 정보를 준다.
    // this.props안에 match객체안에 params 프로퍼티에는 /movie/:id 에서 :id에 들어가있는 값이 담겨져 있다.
    // 리다이렉트 기능을 가지고 있는 push메서드를 사용하기 위해 history객체에서 가져왔다.
    const {
      match: {
        params: { id },
      },
      history: { push },
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
  }

  render() {
    // console.log(this.props);

    const { result, error, loading } = this.state;

    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}

export default DetailContainer;
