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
  width: 100%;
  margin-top: 65px;
`;

const TitleContainer = styled.div`
  margin-top: 90px;
`;

const TitleContent = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 40px;
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
  margin-top: 50px;
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

// TVContainer로부터 받아온 props들을 파라미터로 받는다.
const TVPresenter = ({ topRated, popular, airingToday, onTheAir, error, loading }) => {
  console.log(topRated, popular, airingToday, onTheAir, error, loading);

  const {
    location: { hash },
  } = window;

  // loading을 체크해서 loading이 true일 때는 Loader컴포넌트를, false면 Container컴포넌트를 리턴한다.
  // Container컴포넌트는 Section컴포넌트를 가지고 있고 Section컴포넌트로 title에 값을 넘겨주고 children에는 <Section></Section>사이의 값을 데이터로 넘겨준다.
  return loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      <Helmet>
        <title>넷플릭스 - TV</title>
      </Helmet>

      {popular && popular.length > 0 && hash === "#/tv" && (
        <TitleContainer>
          <TitleContent>
            <Title>인기 프로그램</Title>
            <SubTitle>
              현재 인기 있는 TV 프로그램 목록을 가져옵니다.
              <br />
              TV 프로그램 목록은 매일 자동 업데이트됩니다.
            </SubTitle>
          </TitleContent>
        </TitleContainer>
      )}

      {airingToday && airingToday.length > 0 && hash === "#/tv/airing-today" && (
        <TitleContainer>
          <TitleContent>
            <Title>현재 방영중인 프로그램</Title>
            <SubTitle>
              현재 방영중인 TV 프로그램 목록을 가져옵니다.
              <br />
              오늘 날짜를 기준으로 목록을 가져옵니다.
            </SubTitle>
          </TitleContent>
        </TitleContainer>
      )}

      {onTheAir && onTheAir.length > 0 && hash === "#/tv/on-the-air" && (
        <TitleContainer>
          <TitleContent>
            <Title>방영 예정인 프로그램</Title>
            <SubTitle>
              방영 예정인 TV 프로그램 목록을 가져옵니다.
              <br />
              앞으로 1주일내에 방영될 에피소드가 있는 TV 프로그램을 찾습니다.
            </SubTitle>
          </TitleContent>
        </TitleContainer>
      )}

      {topRated && topRated.length > 0 && hash === "#/tv/top-rated" && (
        <TitleContainer>
          <TitleContent>
            <Title>평점높은 TV 프로그램</Title>
            <SubTitle>
              모든 TV 프로그램 중에서 평점이 높은 프로그램 목록을 가져옵니다.
              <br />
              평점이 높은 프로그램을 기준으로 정렬합니다.
            </SubTitle>
          </TitleContent>
        </TitleContainer>
      )}

      <ButtonContainer>
        <ButtonContent>
          <ButtonLink to="/tv" current={hash === "#/tv" && true}>
            인기 프로그램
          </ButtonLink>
          <ButtonLink to="/tv/airing-today" current={hash === "#/tv/airing-today" && true}>
            현재 방영중
          </ButtonLink>
          <ButtonLink to="/tv/on-the-air" current={hash === "#/tv/on-the-air" && true}>
            방영 예정
          </ButtonLink>
          <ButtonLink to="/tv/top-rated" current={hash === "#/tv/top-rated" && true}>
            평점높은 프로그램
          </ButtonLink>
        </ButtonContent>
      </ButtonContainer>

      {popular && popular.length > 0 && hash === "#/tv" && (
        <Section title="인기 프로그램">
          {popular.map((tv) => (
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

      {airingToday && airingToday.length > 0 && hash === "#/tv/airing-today" && (
        <Section title="현재 방영중">
          {airingToday.map((tv) => (
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

      {onTheAir && onTheAir.length > 0 && hash === "#/tv/on-the-air" && (
        <Section title="방영 예정">
          {onTheAir.map((tv) => (
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

      {topRated && topRated.length > 0 && hash === "#/tv/top-rated" && (
        <Section title="평점높은 프로그램">
          {topRated.map((tv) => (
            // TVPresenter는 Poster컴포넌트에게 각각의 tv에 대한 데이터를 props로 넘겨준다.
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

      {error && <Message text={error}></Message>}
    </Container>
  );
};

// PropTypes를 통해 받아온 props들의 타입들을 검사한다.
TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  onTheAir: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
