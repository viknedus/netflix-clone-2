import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const ScContainer = styled.div`
  padding: 0 10px;
`;

// TVContainer로부터 받아온 객체를 함수의 파라미터로 받는다.
const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => {
  // loading을 체크해서 loading이 true일 때는 Loader컴포넌트를, false면 ScContainer컴포넌트를 리턴한다.
  // ScContainer컴포넌트는 Section컴포넌트를 가지고 있고 Section컴포넌트로 title에 값을 넘겨주고 children에는 <Section></Section>사이의 값을 데이터로 넘겨준다.
  return loading ? (
    <Loader></Loader>
  ) : (
    <ScContainer>
      <Helmet>
        <title>Netflix | TV</title>
      </Helmet>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated TV">
          {topRated.map((tv) => (
            // TVPresenter는 Poster컴포넌트에게 각각의 tv에 대한 데이터를 props로 넘겨준다.
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
      {popular && popular.length > 0 && (
        <Section title="Popular TV">
          {popular.map((tv) => (
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
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today TV">
          {airingToday.map((tv) => (
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
      {error && <Message color="blue" text={error}></Message>}
    </ScContainer>
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
