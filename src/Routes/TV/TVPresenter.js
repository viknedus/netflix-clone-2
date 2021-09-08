import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useInfiniteScroll from "useInfiniteScroll";
import { tvApi } from "api";
import uniqBy from "lodash.uniqby";

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

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const TitleContent = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 40px;
  color: white;
  margin-bottom: 25px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const SubTitle = styled.p`
  font-size: 18px;
  color: gray;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ButtonContent = styled.div`
  display: flex;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
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

  @media (max-width: 768px) {
    margin: 0 1px;
    font-size: 13px;
    font-weight: normal;
  }
`;

const GototopButton = styled.button`
  position: fixed;
  bottom: 60px;
  right: 60px;
  z-index: 200;
  width: 50px;
  height: 50px;
  background: linear-gradient(to right, #536976, #292e49);
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: none;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 3px 2px;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    bottom: 20px;
    right: 20px;
  }
`;

// TVContainer로부터 받아온 props들을 파라미터로 받는다.
const TVPresenter = ({
  topRated,
  popular,
  airingToday,
  onTheAir,
  error,
  loading,
  popularInfinite,
  airingTodayInfinite,
  onTheAirInfinite,
  topRatedInfinite,
}) => {
  const {
    location: { hash },
  } = window;

  const [popularTV, setPopularTV] = useState([]);
  const [airingTodayTV, setAiringTodayTV] = useState([]);
  const [onTheAirTV, setonTheAirTV] = useState([]);
  const [topRatedTV, setTopRatedTV] = useState([]);
  const page = useInfiniteScroll();

  const getInfiniteApi = async () => {
    if (page !== 1) {
      if (hash === "#/tv") {
        try {
          const {
            data: { results: newPopularTV },
          } = await tvApi.popularInfinite(page);
          const totalTV = [...popularTV, ...newPopularTV];
          const uniqByTV = uniqBy(totalTV, "id");

          setPopularTV(uniqByTV);
        } catch (error) {
          console.log(error);
        }
      } else if (hash === "#/tv/airing-today") {
        try {
          const {
            data: { results: newNowPlayingTV },
          } = await tvApi.airingTodayInfinite(page);
          const totalTV = [...airingTodayTV, ...newNowPlayingTV];
          const uniqByTV = uniqBy(totalTV, "id");

          setAiringTodayTV(uniqByTV);
        } catch (error) {
          console.log(error);
        }
      } else if (hash === "#/tv/on-the-air") {
        try {
          const {
            data: { results: newUpcomingTV },
          } = await tvApi.onTheAirInfinite(page);
          const totalTV = [...onTheAirTV, ...newUpcomingTV];
          const uniqByTV = uniqBy(totalTV, "id");

          setonTheAirTV(uniqByTV);
        } catch (error) {
          console.log(error);
        }
      } else if (hash === "#/tv/top-rated") {
        try {
          const {
            data: { results: newTopRatedTV },
          } = await tvApi.topRatedInfinite(page);
          const totalTV = [...topRatedTV, ...newTopRatedTV];
          const uniqByTV = uniqBy(totalTV, "id");

          setTopRatedTV(uniqByTV);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  useEffect(() => {
    getInfiniteApi();
  }, [page]);

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
              1주일내에 방영될 에피소드가 있는 프로그램을 찾습니다.
            </SubTitle>
          </TitleContent>
        </TitleContainer>
      )}

      {topRated && topRated.length > 0 && hash === "#/tv/top-rated" && (
        <TitleContainer>
          <TitleContent>
            <Title>평점높은 TV 프로그램</Title>
            <SubTitle>
              모든 TV 프로그램 중에서 평점이 높은 프로그램을 가져옵니다.
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

      {popularInfinite && popularInfinite.length > 0 && hash === "#/tv" && (
        <Section title="인기 프로그램">
          {popularTV.map((tv) => (
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

      {airingTodayInfinite && airingTodayInfinite.length > 0 && hash === "#/tv/airing-today" && (
        <Section title="현재 방영중">
          {airingTodayTV.map((tv) => (
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

      {onTheAirInfinite && onTheAirInfinite.length > 0 && hash === "#/tv/on-the-air" && (
        <Section title="방영 예정">
          {onTheAirTV.map((tv) => (
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

      {topRatedInfinite && topRatedInfinite.length > 0 && hash === "#/tv/top-rated" && (
        <Section title="평점높은 프로그램">
          {topRatedTV.map((tv) => (
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

      <GototopButton onClick={() => window.scrollTo(0, 0)}>
        <i class="fas fa-arrow-up" style={{ color: "white", fontSize: "25px" }}></i>
      </GototopButton>

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
