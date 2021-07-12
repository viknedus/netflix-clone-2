import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import noPoster from "../../assets/noPoster.png";

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

const DetailPresenter = ({ result, error, loading = true }) => {
  // console.log("result", result);
  // console.log("loading", loading);

  return loading ? (
    <Loader></Loader>
  ) : (
    <ScContainer>
      {console.log(result.backdrop_path)}
      {/* ScBackdrop컴포넌트는 result안에 있는 backdrop_path를 가져오고 만약 있으면 https://image.tmdb.org/t/p/original${result.backdrop_path}를, 없으면 noPoster변수를 imageUrl props로 전달한다. */}
      <ScBackdrop imageUrl={result.backdrop_path ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` : noPoster}></ScBackdrop>
      <ScContent>
        <ScCover imageUrl={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : noPoster}></ScCover>
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
