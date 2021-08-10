import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 160px;
`;

const Title = styled.h1`
  color: white;
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const Form = styled.form`
  position: relative;
  margin-bottom: 80px;
`;

const Input = styled.input`
  /* all: unset: 기본적으로 가지고 있는 태그의 스타일 속성을 초기화시킨다. */
  font-size: 20px;
  border: none;
  outline: none;
  background-color: transparent;
  width: 660px;
  padding: 15px 20px;
  background-color: white;
`;

const Button = styled.button`
  border: none;
  outline: none;
  font-size: 20px;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #e30914;
  color: white;
  padding: 13px 30px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  box-sizing: border-box;
`;

const ButtonContent = styled.div`
  display: flex;
`;

const ButtonLink = styled(Link)`
  color: white;
  border-bottom: 3px solid ${(props) => (props.current ? "#E30914" : "transparent")};
  color: ${(props) => (props.current ? "#E30914" : "white")};
  margin: 0 15px;
  padding: 10px 10px;
  box-sizing: border-box;
  font-size: 17px;
  font-weight: bold;
`;

const SearchPresenter = ({ movieResults, tvResults, searchTerm, error, loading, handleSubmit, updateSearchTerm }) => {
  // console.log("movieResults", movieResults);
  // console.log("tvResults", tvResults);

  const {
    location: { hash },
  } = window;

  return (
    <Container>
      <Helmet>
        <title>넷플릭스 - 검색</title>
      </Helmet>

      <Title>
        수백만 편의 영화, TV 프로그램이 있습니다.
        <br />
        지금 바로 검색해보세요.
      </Title>

      {/* onSubmit속성을 통해 Submit이벤트가 발생했을 때 handleSubmit함수를 실행한다. */}
      <Form onSubmit={handleSubmit}>
        {/* form태그안에는 input태그가 있고 input태그의 value로는 state안에 있는 searchTerm을 가져온다. */}
        {/* onChange속성을 통해 input에 변화가 생겼을 때 updateSearchTerm함수를 실행한다. */}
        <Input placeholder="영화 또는 TV 프로그램을 검색하세요." value={searchTerm} onChange={updateSearchTerm}></Input>
        <Button onSubmit={handleSubmit}>검색</Button>
      </Form>

      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <ButtonContainer>
            <ButtonContent>
              <ButtonLink to="/search" current={hash === "#/search" && true}>
                영화
              </ButtonLink>
              <ButtonLink to="/search/result-tv" current={hash === "#/search/result-tv" && true}>
                TV 프로그램
              </ButtonLink>
            </ButtonContent>
          </ButtonContainer>

          {movieResults && movieResults.length > 0 && hash === "#/search" && (
            <Section title="영화">
              {movieResults.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.title}
                  rating={movie.vote_average}
                  year={movie.release_date ? movie.release_date : ""}
                  isMovie={true}
                  popularity={movie.popularity && Math.round(movie.popularity)}
                ></Poster>
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && hash === "#/search/result-tv" && (
            <Section title="TV 프로그램">
              {tvResults.map((tv) => (
                <Poster
                  key={tv.id}
                  id={tv.id}
                  imageUrl={tv.poster_path}
                  title={tv.name}
                  rating={tv.vote_average}
                  year={tv.first_air_date ? tv.first_air_date : ""}
                  isMovie={false}
                  popularity={tv.popularity && Math.round(tv.popularity)}
                ></Poster>
              ))}
            </Section>
          )}
        </>
      )}
      {error && <Message text={error}></Message>}

      {/* Search페이지에서 영화나 TV를 검색했을 때 만약 리스트에 없는 영화나 TV면 <Message>컴포넌트를 랜더한다. */}
      {/* 검색했을 때 movieResults가 true이고 tvResults가 true이고, movieResults의 길이가 0이고 tvResults의 길이가 0이면 <Message>컴포넌트를 랜더한다. */}
      {/* 검색했을 때 검색한 것이 영화나 TV에 없다면 movieResults와 tvResults는 빈 배열([])이 반환되지만, 빈 배열 또한 Boolean([])으로 확인해보면 true를 반환하므로 아래 코드가 작동하는 것이다. */}
      {/* 그래서 만약 검색한 것이 없다면 <Message>컴포넌트의 text props로 "Nothing Found"를 전달해준다. */}
      {movieResults && tvResults && movieResults.length === 0 && tvResults.length === 0 && <Message text="Nothing Found"></Message>}
    </Container>
  );
};

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
