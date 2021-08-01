import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const MoviePresenter = ({ nowPlaying, upcoming, popular, topRated, error, loading, nowPlaying2 }) => {
  console.log(nowPlaying, upcoming, popular, topRated, error, loading);

  return loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      <Helmet>
        <title>넷플릭스 - 영화</title>
      </Helmet>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="현재 상영중">
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date.substring(0, 4) : ""}
              isMovie={true}
              overview={movie.overview}
            ></Poster>
          ))}
        </Section>
      )}

      {upcoming && upcoming.length > 0 && (
        <Section title="상영 예정">
          {upcoming.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date.substring(0, 4) : ""}
              isMovie={true}
              overview={movie.overview}
            ></Poster>
          ))}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title="인기 영화">
          {popular.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date.substring(0, 4) : ""}
              isMovie={true}
              overview={movie.overview}
            ></Poster>
          ))}
        </Section>
      )}

      {topRated && topRated.length > 0 && (
        <Section title="평점높은 영화">
          {topRated.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date.substring(0, 4) : ""}
              isMovie={true}
              overview={movie.overview}
            ></Poster>
          ))}
        </Section>
      )}

      {nowPlaying2 && nowPlaying2.length > 0 && (
        <Section title="현재 상영중2">
          {nowPlaying2.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date.substring(0, 4) : ""}
              isMovie={true}
              overview={movie.overview}
            ></Poster>
          ))}
        </Section>
      )}

      {error && <Message text={error}></Message>}
    </Container>
  );
};

MoviePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  nowPlaying2: PropTypes.array,
};

export default MoviePresenter;
