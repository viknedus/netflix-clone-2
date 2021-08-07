import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";
import { Link, withRouter } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const TitleContainer = styled.div`
  margin-top: 100px;
`;

const TitleContent = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: white;
  margin-bottom: 25px;
  font-weight: bold;
`;

const SubTitle = styled.p`
  font-size: 18px;
  color: gray;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  margin-top: 90px;
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

const MoviePresenter = ({ nowPlaying, upcoming, popular, topRated, error, loading, nowPlaying2 }) => {
  console.log(nowPlaying, upcoming, popular, topRated, error, loading);

  const {
    location: { hash },
  } = window;

  return loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      <Helmet>
        <title>넷플릭스 - 영화</title>
      </Helmet>

      {popular && popular.length > 0 && hash === "#/movie" && (
        <TitleContainer>
          <TitleContent>
            <Title>인기 영화</Title>
            <SubTitle>
              현재 인기 있는 영화 목록을 가져옵니다.
              <br />
              영화 목록은 매일 자동 업데이트됩니다.
            </SubTitle>
          </TitleContent>
        </TitleContainer>
      )}

      {nowPlaying && nowPlaying.length > 0 && hash === "#/movie/now-playing" && (
        <TitleContainer>
          <TitleContent>
            <Title>현재 상영중인 영화</Title>
            <SubTitle>
              현재 상영중인 영화 목록을 가져옵니다.
              <br />
              지정된 날짜 내에서 상영중인 모든 영화를 찾습니다.
            </SubTitle>
          </TitleContent>
        </TitleContainer>
      )}

      {upcoming && upcoming.length > 0 && hash === "#/movie/upcoming" && (
        <TitleContainer>
          <TitleContent>
            <Title>상영 예정인 영화</Title>
            <SubTitle>
              상영 예정인 영화 목록을 가져옵니다.
              <br />
              지정된 날짜 내에서 앞으로 상영 예정인 모든 영화를 찾습니다.
            </SubTitle>
          </TitleContent>
        </TitleContainer>
      )}

      {topRated && topRated.length > 0 && hash === "#/movie/top-rated" && (
        <TitleContainer>
          <TitleContent>
            <Title>평점높은 영화</Title>
            <SubTitle>
              모든 영화 중에서 평점이 높은 영화 목록을 가져옵니다.
              <br />
              평점이 높은 영화를 기준으로 정렬합니다.
            </SubTitle>
          </TitleContent>
        </TitleContainer>
      )}

      <ButtonContainer>
        <ButtonContent>
          <ButtonLink to="/movie" current={hash === "#/movie" && true}>
            인기 영화
          </ButtonLink>
          <ButtonLink to="/movie/now-playing" current={hash === "#/movie/now-playing" && true}>
            현재 상영중
          </ButtonLink>
          <ButtonLink to="/movie/upcoming" current={hash === "#/movie/upcoming" && true}>
            상영 예정
          </ButtonLink>
          <ButtonLink to="/movie/top-rated" current={hash === "#/movie/top-rated" && true}>
            평점높은 영화
          </ButtonLink>
        </ButtonContent>
      </ButtonContainer>

      {popular && popular.length > 0 && hash === "#/movie" && (
        <Section title="인기 영화">
          {popular.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date : ""}
              isMovie={true}
              overview={movie.overview}
              popularity={movie.popularity && Math.round(movie.popularity)}
            ></Poster>
          ))}
        </Section>
      )}

      {nowPlaying && nowPlaying.length > 0 && hash === "#/movie/now-playing" && (
        <Section title="현재 상영중">
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date : ""}
              isMovie={true}
              overview={movie.overview}
              popularity={movie.popularity && Math.round(movie.popularity)}
            ></Poster>
          ))}
        </Section>
      )}

      {upcoming && upcoming.length > 0 && hash === "#/movie/upcoming" && (
        <Section title="상영 예정">
          {upcoming.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date : ""}
              isMovie={true}
              overview={movie.overview}
              popularity={movie.popularity && Math.round(movie.popularity)}
            ></Poster>
          ))}
        </Section>
      )}

      {topRated && topRated.length > 0 && hash === "#/movie/top-rated" && (
        <Section title="평점높은 영화">
          {topRated.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date : ""}
              isMovie={true}
              overview={movie.overview}
              popularity={movie.popularity && Math.round(movie.popularity)}
            ></Poster>
          ))}
        </Section>
      )}

      {/* {nowPlaying2 && nowPlaying2.length > 0 && (
        <Section title="현재 상영중2">
          {nowPlaying2.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date : ""}
              isMovie={true}
              overview={movie.overview}
              popularity={movie.popularity && Math.round(movie.popularity)}
            ></Poster>
          ))}
        </Section>
      )} */}

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

export default withRouter(MoviePresenter);
