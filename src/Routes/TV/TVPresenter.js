import PropTypes from "prop-types";
import styled from "styled-components";

// TVContainer로부터 받아온 객체를 함수의 파라미터로 받는다.
const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => null;

// PropTypes를 통해 받아온 props들의 타입들을 검사한다.
TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
