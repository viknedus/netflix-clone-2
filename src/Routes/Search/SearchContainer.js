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
    this.setState({ loading: true });

    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      // console.log(movieResults, tvResults);

      this.setState({
        movieResults,
        tvResults,
      });
    } catch {
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
      />
    );
  }
}

export default SearchContainer;
