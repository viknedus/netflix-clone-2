import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div``;

// TVContainer로부터 받아온 props들을 파라미터로 받는다.
const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => {
  console.log(topRated, popular, airingToday, error, loading);

  // loading을 체크해서 loading이 true일 때는 Loader컴포넌트를, false면 Container컴포넌트를 리턴한다.
  // Container컴포넌트는 Section컴포넌트를 가지고 있고 Section컴포넌트로 title에 값을 넘겨주고 children에는 <Section></Section>사이의 값을 데이터로 넘겨준다.
  return loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      <Helmet>
        <title>넷플릭스 - TV</title>
      </Helmet>

      {airingToday && airingToday.length > 0 && (
        <Section title="현재 방영중">
          {airingToday.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.name}
              rating={tv.vote_average}
              year={tv.first_air_date ? tv.first_air_date.substring(0, 4) : ""}
              isMovie={false}
            ></Poster>
          ))}
        </Section>
      )}

      {topRated && topRated.length > 0 && (
        <Section title="최고 평점 프로그램">
          {topRated.map((tv) => (
            // TVPresenter는 Poster컴포넌트에게 각각의 tv에 대한 데이터를 props로 넘겨준다.
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.name}
              rating={tv.vote_average}
              year={tv.first_air_date ? tv.first_air_date.substring(0, 4) : ""}
              isMovie={false}
            ></Poster>
          ))}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title="인기 프로그램">
          {popular.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.name}
              rating={tv.vote_average}
              year={tv.first_air_date ? tv.first_air_date.substring(0, 4) : ""}
              isMovie={false}
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
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
