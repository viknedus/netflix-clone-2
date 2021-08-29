import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "api";

class SearchContainer extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    lodaing: false,
  };

  // componentDidMount() {
  //   this.handleSubmit();
  // }

  // handleSubmit은 form에서 텍스트를 입력하고 엔터를 눌렀을 때 실행되는 함수이다.
  // 주의!!! 만약 리액트에서 컴포넌트 안에서만 쓰일 componentDidMount같은 함수면 componentDidMount(){}형태로 만들어줘도 상관없지만
  // handleSubmit이나 updateSearchTerm같이 SearchPresenter.js같은 곳에서 onChange등의 이벤트에 맞춰서 실행될 함수라면
  // this.updateTerm.bind(this)처럼 .bind(this)를 통해 바인딩을 해주거나 아니면 처음부터 함수를 생성할 때 handleSubmit(){}가 아닌 handleSubmit = () => {}형태로 화살표함수로 만들어주는 것이 좋다.
  // 화살표 함수로 만들어주면 자동으로 바인딩되기 때문에 바인딩을 안해줘도 된다.
  // 만약 위와 같이 바인딩을 해주지 않거나 화살표함수 형태로 만들지 않고 onChange이벤트등에서 사용하게 되면 TypeError Cannot read property 'setState' of undefined와 같은 에러가 발생할 수 있다.
  handleSubmit = (event) => {
    event.preventDefault();

    // handleSubmit함수는 state안에 있는 searchTerm을 가져와서 확인하고 그것이 빈 값이 아니면 searchByTerm함수를 실행한다.
    const { searchTerm } = this.state;

    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  // updateSearchTerm 함수는 사용자가 input에서 입력한 값을 value로 받아온다.
  // value로 받아와서 setState함수를 통해 searchTerm에 넣는다.
  updateSearchTerm = (event) => {
    const {
      target: { value },
    } = event;
    // console.log(value);

    this.setState({
      searchTerm: value,
    });
  };

  // searchByTerm함수는 state안에 있는 searchTerm을 가져와서 각각 moviesApi.search()와 tvApi.search()의 인자로 전달해준다.
  // 그래서 영화와 tv데이터에서 사용자가 검색한 searchTerm에 해당하는 데이터들을 가져와준다.
  // 그리고 그 데이터들을 state의 movieResults와 tvResults에 넣는다.
  searchByTerm = async () => {
    const { searchTerm } = this.state;

    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);

      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);

      this.setState({
        movieResults,
        tvResults,
        loading: true,
      });
    } catch (error) {
      console.log(error);

      this.setState({
        error: "Can't fint Results.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    // console.log(this.state);

    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateSearchTerm={this.updateSearchTerm}
      ></SearchPresenter>
    );
  }
}

export default SearchContainer;
