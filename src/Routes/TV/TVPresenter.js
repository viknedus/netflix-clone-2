import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const ScContainer = styled.div`
  padding: 0 10px;
`;

// TVContainer로부터 받아온 객체를 함수의 파라미터로 받는다.
const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => {
  // loading을 체크해서 loading이 true일 때는 Loading컴포넌트를 false일 때 ScContainer컴포넌트를 리턴한다.
  // ScContainer컴포넌트는 Section컴포넌트를 가지고 있고 Section컴포넌트로 title에 값을 넘겨주고 children에는 <Section></Section>사이의 값을 데이터로 넘겨준다.
  return loading ? (
    <Loader></Loader>
  ) : (
    <ScContainer>
      {topRated && topRated.length > 0 && <Section title="Top Rated TV">{topRated.map((tv) => tv.name)}</Section>}
      {popular && popular.length > 0 && <Section title="Popular TV">{popular.map((tv) => tv.name)}</Section>}
      {airingToday && airingToday.length > 0 && <Section title="Airing Today TV">{airingToday.map((tv) => tv.name)}</Section>}
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
