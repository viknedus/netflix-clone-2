import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ScContainer = styled.div``;

const ScImageContainer = styled.div``;

const ScImage = styled.div``;

const ScRating = styled.span``;

const ScTitle = styled.span``;

const ScYear = styled.span``;

// Poster함수는 id, imageUrl, title, isMovie등의 파라미터를 받고 isMovie파라미터의 기본값으로는 false로 설정해줬다.
const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => {
  return (
    // react-router-dom이 가지고 있는 Link컴포넌트를 통해 조건에 따라 각각의 라우터로 이동시키고 컴포넌트를 랜더한다.
    // Link컴포넌트에 to속성에 라우터 URL를 지정해주고 isMovie가 true이면 /movie/${id}로 false면 /tv/${id}로 URL을 이동시키고 아래 <ScContainer>컴포넌트를 랜더한다.
    // isMovie가 true라는 의미는 영화에 대한 정보가 있다는 의미니깐 /movie 라우터로 이동시키고 false라는 의미는 영화에 대한 정보가 없고 TV에 대한 정보가 있다는 의미니깐 /tv 라우터로 이동시킨다.
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <ScContainer>
        <ScImageContainer>
          <ScImage imageUrl={imageUrl}></ScImage>
          <ScRating>⭐ {rating}/10</ScRating>
        </ScImageContainer>
        <ScTitle>{title}</ScTitle>
        <ScYear>{year}</ScYear>
      </ScContainer>
    </Link>
  );
};

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.number,
  isMovie: PropTypes.bool,
};

export default Poster;
