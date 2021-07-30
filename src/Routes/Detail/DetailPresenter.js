import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import noPoster from "../../assets/noPoster.png";
import Helmet from "react-helmet";

const ScContainer = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
`;

const ScBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;

const ScContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const ScCover = styled.div`
  width: 20%;
  height: 80%;
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: cover;
`;

const ScData = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const ScTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
`;

const ScItemContainer = styled.div``;

const ScItem = styled.span``;

const ScDivider = styled.span``;

const ScOverview = styled.p`
  margin-top: 30px;
  line-height: 1.5;
`;

const DetailPresenter = ({ result, error, loading = true }) => {
  // console.log("result", result);
  // console.log("loading", loading);

  return loading ? (
    <Loader></Loader>
  ) : error ? (
    <Message></Message>
  ) : (
    <ScContainer>
      <Helmet>
        <title>Netflix | {result.original_title}</title>
      </Helmet>

      {/* {console.log(result.backdrop_path)} */}
      {/* ScBackdrop컴포넌트는 result안에 있는 backdrop_path를 가져오고 만약 있으면 https://image.tmdb.org/t/p/original${result.backdrop_path}를, 없으면 noPoster변수를 imageUrl props로 전달한다. */}
      <ScBackdrop imageUrl={result.backdrop_path ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` : noPoster}></ScBackdrop>
      <ScContent>
        <ScCover imageUrl={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : noPoster}></ScCover>
        <ScData>
          <ScTitle>{result.original_title ? result.original_title : result.original_name}</ScTitle>
          <ScItemContainer>
            <ScItem>{result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}</ScItem>
            <ScDivider>▪</ScDivider>
            <ScItem>{result.runtime ? result.runtime : result.episode_run_time}분</ScItem>
            <ScDivider>▪</ScDivider>
            {/* {조건 ? 참: 거짓}과 {조건 && 구문}의 차이점 */}
            {/* {조건 ? 참: 거짓} : 조건이 true이면 참, false이면 거짓을 실행한다. {조건 && 구문} : 조건이 true이면 && 뒤에 구문을 실행한다. */}
            {/* 만약 result.genres가 존재해서 true면 result.genres.map()함수를 실행한다. */}
            {/* result.genres.map()함수는 매개변수로 genres와 index를 받고 index와 result.genres배열의 길이가 같아지면 genre.name를 출력하고 그렇지 않을 때는 genre.name /을 출력한다. */}
            {/* Family / Drama 이런식으로 맨 마지막 장르 Drama에서는 /가 붙지 않게 하기 위해서 아래와 같이 코드를 짰다. */}
            <ScItem>{result.genres && result.genres.map((genre, index) => (index === result.genres.length - 1 ? genre.name : `${genre.name} / `))}</ScItem>
            <ScDivider>▪</ScDivider>
            <ScItem>⭐{result.vote_average && result.vote_average}/10</ScItem>
          </ScItemContainer>
          <ScOverview>{result.overview && result.overview}</ScOverview>
        </ScData>
      </ScContent>
    </ScContainer>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
