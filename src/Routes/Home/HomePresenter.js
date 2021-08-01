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
  height: 100vh;
`;

const HomeContainer = styled.div`
  height: 100%;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`;

const Content = styled.div``;

const Title = styled.h1``;

const SubTitle = styled.h2``;

const Genres = styled.span``;

const Year = styled.div``;

const Runtime = styled.div``;

const Rating = styled.div``;

const Overview = styled.div``;

const HomePresenter = ({ movieDetail, error, loading }) => {
  console.log(movieDetail);

  // console.log(movieDetail.title);

  return loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      <Helmet>
        <title>넷플릭스 - 홈</title>
      </Helmet>

      {movieDetail && (
        <HomeContainer>
          <Iframe
            src="https://www.youtube.com/embed/rmR7xefwjWs?autoplay=1&mute=1&showinfo=0&controls=0&loop=1&autopause=0"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></Iframe>
          <Content>
            <Title>{movieDetail.title}</Title>
            <SubTitle>{movieDetail.tagline}</SubTitle>
            <Genres>{movieDetail.title}</Genres>
            <Year>{movieDetail.release_date}</Year>
            <Runtime>{movieDetail.runtime}</Runtime>
            <Rating>{movieDetail.vote_average}</Rating>
            <Overview>{movieDetail.overview}</Overview>
          </Content>
        </HomeContainer>
      )}

      {/* {nowPlaying && nowPlaying.length > 0 && (
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
      )} */}

      {error && <Message text={error}></Message>}
    </Container>
  );
};

HomePresenter.propTypes = {
  movieDetail: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
