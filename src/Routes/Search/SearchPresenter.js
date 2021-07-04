import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

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
  return (
    <ScContainer>
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
                <span key={movie.id}>{movie.title}</span>
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Results">
              {tvResults.map((tv) => (
                <span key={tv.id}>{tv.name}</span>
              ))}
            </Section>
          )}
        </>
      )}
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
