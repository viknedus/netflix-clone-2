import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import noPoster from "../assets/noPoster.png";

const ScContainer = styled.div`
  font-size: 13px;
`;

const ScImage = styled.div`
  /* background의 url를 지정해주기 위해 아래와 같이 props를 매개변수로 받아와서 props.imageUrl을 통해 <ScImage>컴포넌트가 가지고 있는 {imageUrl} 데이터를 가져온다. */
  /* URL주소앞에 https://image.tmdb.org/t/p/w300 를 붙여주고 그 뒤에 이미지의 URL를 입력해줘야 정상적으로 가져와진다. */
  /* w300대신 w400이나 w500, original을 통해 가져오려고 하는 이미지 크기를 조정할 수 있다. */
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: cover;
  height: 200px;
  transition: 0.2s linear;
`;

const ScRating = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0;
  transition: 0.2s linear;
`;

const ScTitle = styled.span``;

const ScYear = styled.span``;

const ScImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;

  /* ScImageContainer에 hover했을 때 ScImage와 ScRating의 스타일을 변경해준다. */
  /* ${ScImage}라고 적어준 이유는 ScImage는 const로 선언된 변수이기 때문에 자바스크립트를 쓸 수 있는 $중괄호 형태로 묶어줘야 한다. */
  &:hover {
    ${ScImage} {
      opacity: 0.3;
    }
    ${ScRating} {
      opacity: 1;
    }
  }
`;

// Poster함수는 id, imageUrl, title, isMovie등의 파라미터를 받고 isMovie파라미터의 기본값으로는 false로 설정해줬다.
const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => {
  return (
    // react-router-dom이 가지고 있는 Link컴포넌트를 통해 조건에 따라 각각의 라우터로 이동시키고 컴포넌트를 랜더한다.
    // Link컴포넌트에 to속성에 라우터 URL를 지정해주고 isMovie가 true이면 /movie/${id}로 false면 /tv/${id}로 URL을 이동시키고 아래 <ScContainer>컴포넌트를 랜더한다.
    // isMovie가 true라는 의미는 영화에 대한 정보가 있다는 의미니깐 /movie 라우터로 이동시키고 false라는 의미는 영화에 대한 정보가 없고 TV에 대한 정보가 있다는 의미니깐 /tv 라우터로 이동시킨다.
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <ScContainer>
        <ScImageContainer>
          {/* 영화나 TV 이미지가 있는지 체크해서 있으면 imageUrl props로 `https://image.tmdb.org/t/p/w300${imageUrl}`를 전달하고 없으면 require("../assets/noPoster.png")를 통해 aseets폴더 아래있는 noPoster.png 이미지를 전달한다. */}
          {/* 자바스크립트의 옛날 문법인 require()함수를 통해 폴더나 파일 등을 가져올 수 있다. */}
          {/* require("../assets/noPoster.png")뒤에 default를 붙여준 이유는 require("../assets/noPoster.png")를 콘솔창에 찍어보면 Module이라는 객체를 가져오기 때문이다.  */}
          {/* 우리는 Module이라는 객체 안에 있는 default프로퍼티가 가지고 있는 경로가 필요하기 때문에 .default 붙여줘서 객체안에 있는 제대로 된 데이터 경로를 가져와야 한다. */}
          {/* <ScImage imageUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../assets/noPoster.png").default}></ScImage> */}

          {/* 위와 같이 require()를 통해 가져와도 되고 또 다른 방법으로는 import noPoster from "../assets/noPoster.png";를 통해 noPoster.png이미지를 가져와서 아래와 같이 noPoster로 넣어줄 수도 있다. */}
          {/* {console.log(require("../assets/noPoster.png"))} */}
          <ScImage imageUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : noPoster}></ScImage>
          <ScRating>⭐ {rating}/10</ScRating>
        </ScImageContainer>

        {/* title.length를 체크해서 15보다 크면 substring(0,15)를 통해 0부터 15까지의 글자수만 전달하도록 한다. */}
        <ScTitle>{title.length > 16 ? `${title.substring(0, 16)}...` : title}</ScTitle>
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
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
