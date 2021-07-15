import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const ScContainer = styled.div`
  padding: 0 20px;
`;

const ScForm = styled.form`
  margin-bottom: 20px;
`;

const ScInput = styled.input`
  /* all: unset;은 모든 스타일 속성을 초기화 시켜버린다. */
  /* all: unset; */
  font-size: 25px;
`;

const SearchPresenter = ({ movieResults, tvResults, searchTerm, error, loading, handleSubmit, updateSearchTerm }) => {
  console.log("movieResults", movieResults);
  console.log("tvResults", tvResults);

  return (
    <ScContainer>
      <Helmet>
        <title>Netflix | Search</title>
      </Helmet>

      {/* onSubmit속성을 통해 Submit이벤트가 발생했을 때 handleSubmit함수를 실행하고 onChange속성을 통해 input에 변화가 생겼을 때 updateSearchTerm함수를 실행한다. */}
      <ScForm onSubmit={handleSubmit} onChange={updateSearchTerm}>
        {/* form태그안에는 input태그가 있고 input태그의 value로는 state안에 있는 searchTerm을 가져온다. */}
        <ScInput placeholder="Search Movies or TV..." value={searchTerm}></ScInput>
      </ScForm>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          {movieResults && movieResults.length > 0 && (
            <Section title="Movie Results">
              {movieResults.map((movie) => (
                // <span key={movie.id}>{movie.title}</span>

                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date ? movie.release_date.substring("0", "4") : ""}
                  isMovie={true}
                ></Poster>
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Results">
              {tvResults.map((tv) => (
                // <span key={tv.id}>{tv.name}</span>

                <Poster
                  key={tv.id}
                  id={tv.id}
                  imageUrl={tv.poster_path}
                  title={tv.original_name}
                  rating={tv.vote_average}
                  year={tv.first_air_date ? tv.first_air_date.substring("0", "4") : ""}
                  isMovie={false}
                ></Poster>
              ))}
            </Section>
          )}
        </>
      )}
      {error && <Message color="green" text={error}></Message>}

      {/* Search페이지에서 영화나 TV를 검색했을 때 만약 없는 영화나 TV라면 <Message>컴포넌트를 랜더하도록 한다. */}
      {/* 검색했을 때 movieResults가 true이고 tvResults가 true이고, movieResults의 길이가 0이고 tvResults의 길이가 0이면 <Message>컴포넌트를 랜더한다. */}
      {/* 검색했을 때 검색한 것이 영화나 TV에 없다면 movieResults와 tvResults는 빈 배열이 반환하게 되지만, 빈 배열 또한 Boolean([])으로 확인해보면 true를 반환하므로 아래 코드가 작동하는 것이다. */}
      {/* 그래서 만약 검색한 것이 없다면 <Message>컴포넌트의 text props로 "Nothing Found"를 전달해준다. */}
      {movieResults && tvResults && movieResults.length === 0 && tvResults.length === 0 && <Message color="red" text="Nothing Found"></Message>}
    </ScContainer>
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
