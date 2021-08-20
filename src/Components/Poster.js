import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import noPoster from "../assets/noPoster.png";

const Container = styled.div`
  font-size: 13px;
  transition: 0.2s linear;
`;

const Image = styled.div`
  /* background의 url를 지정해주기 위해 아래와 같이 props를 매개변수로 받아와서 props.imageUrl을 통해 <Image>컴포넌트가 가지고 있는 {imageUrl} 데이터를 가져온다. */
  /* URL주소앞에 https://image.tmdb.org/t/p/w300 를 붙여주고 그 뒤에 이미지의 URL를 입력해줘야 정상적으로 가져와진다. */
  /* w300대신 w400이나 w500, original을 통해 가져오려고 하는 이미지 크기를 조정할 수 있다. */
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: cover;
  /* height: 360px; */
  height: 340px;
  transition: 0.2s linear;
  border-radius: 7px;

  @media (max-width: 768px) {
    height: 280px;
  }
`;

const Overview = styled.span`
  position: absolute;
  top: 30px;
  left: 0px;
  opacity: 0;
  transition: 0.2s linear;
  color: white;
  line-height: 1.8;
  font-size: 14px;
  padding: 20px;
`;

const Popularity = styled.span`
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translate(-50%);
  opacity: 0;
  transition: 0.2s linear;
  color: white;
  line-height: 1.8;
  font-size: 14px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid white;
  width: 48%;
  border-radius: 3px;
  transition: 0.3s;

  &:hover {
    color: dodgerblue;
    border: 1px solid dodgerblue;
  }
`;

const PopularityChild = styled.span`
  color: dodgerblue;
  font-size: 21px;
  margin-left: 7px;
  margin-bottom: 5px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  color: white;
  font-size: 15px;
  margin-top: 12px;
  font-weight: bold;
`;

const YearRatingContainer = styled.div`
  margin-top: 11px;
`;

const Year = styled.span`
  color: gray;
  font-size: 14px;
  margin-right: 10px;
`;

const ContentRating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: gray;
  margin-top: 5px;
`;

const ContentRatingChild = styled.div`
  font-size: 14px;
  color: gray;
  margin-left: 3px;
  margin-top: 2px;
`;

const PosterContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  overflow: hidden;
  border-radius: 7px;
  transition: 0.2s linear;

  /* PosterContainer에 hover했을 때 Image와 Popularity의 스타일을 변경해준다. */
  /* ${Image}라고 적어준 이유는 Image는 const로 선언된 변수이기 때문에 자바스크립트를 쓸 수 있는 $중괄호 형태로 묶어줘야 한다. */
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Overview} {
      opacity: 1;
    }
    ${Popularity} {
      opacity: 1;
    }
  }
`;

const ScLink = styled(Link)`
  width: 220px;
  border-radius: 7px;
  margin-right: 20px;
  margin-bottom: 45px;

  /* &:nth-child(10),
  &:nth-child(20) {
    margin-right: 0;
  } */

  &:hover {
    ${Container} {
      transform: scale(1.05);
    }
    ${PosterContainer} {
      box-shadow: 0 2px 8px black, 0 2px 4px black;
    }
  }

  @media (max-width: 768px) {
    margin: 0;
    width: 170px;
    margin-bottom: 40px;
  }
`;

// Poster함수는 id, imageUrl, title, isMovie등의 파라미터를 받고 isMovie파라미터의 기본값으로는 false로 설정해줬다.
const Poster = ({ id, imageUrl, title, rating, year, isMovie = false, overview, popularity }) => {
  return (
    // react-router-dom이 가지고 있는 Link컴포넌트를 통해 조건에 따라 각각의 라우터로 이동시키고 컴포넌트를 랜더한다.
    // Link컴포넌트에 to속성에 라우터 URL를 지정해주고 isMovie가 true이면 /movie/${id}로 false면 /tv/${id}로 URL을 이동시키고 아래 <Container>컴포넌트를 랜더한다.
    // isMovie가 true라는 의미는 영화에 대한 정보가 있다는 의미니깐 /movie 라우터로 이동시키고 false라는 의미는 영화에 대한 정보가 없고 TV에 대한 정보가 있다는 의미니깐 /tv 라우터로 이동시킨다.
    <ScLink to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <Container>
        <PosterContainer>
          {/* 영화나 TV 이미지가 있는지 체크해서 있으면 imageUrl props로 `https://image.tmdb.org/t/p/w300${imageUrl}`를 전달하고 없으면 require("../assets/noPoster.png")를 통해 aseets폴더 아래있는 noPoster.png 이미지를 전달한다. */}
          {/* 자바스크립트의 옛날 문법인 require()함수를 통해 폴더나 파일 등을 가져올 수 있다. */}
          {/* require("../assets/noPoster.png")뒤에 default를 붙여준 이유는 require("../assets/noPoster.png")를 콘솔창에 찍어보면 Module이라는 객체를 가져오기 때문이다.  */}
          {/* 우리는 Module이라는 객체 안에 있는 default프로퍼티가 가지고 있는 경로가 필요하기 때문에 .default 붙여줘서 객체안에 있는 제대로 된 데이터 경로를 가져와야 한다. */}
          {/* <Image imageUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../assets/noPoster.png").default}></Image> */}

          {/* 위와 같이 require()를 통해 가져와도 되고 또 다른 방법으로는 import noPoster from "../assets/noPoster.png";를 통해 noPoster.png이미지를 가져와서 아래와 같이 noPoster로 넣어줄 수도 있다. */}
          {/* {console.log(require("../assets/noPoster.png"))} */}
          <Image imageUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : noPoster}></Image>
          <Overview>{overview ? `${overview.substring(0, 130)}..` : title}</Overview>
          <Popularity>{/* 순위<PopularityChild>{popularity}</PopularityChild> */}상세정보</Popularity>
        </PosterContainer>

        <ContentContainer>
          {/* title.length를 체크해서 15보다 크면 substring(0,15)를 통해 0부터 15까지의 글자수만 전달하도록 한다. */}
          <Title>{title.length > 15 ? `${title.substring(0, 15)}..` : title}</Title>

          <YearRatingContainer>
            <Year>개봉일 {year}</Year>
            <ContentRating>
              ⭐<ContentRatingChild>{rating}</ContentRatingChild>
            </ContentRating>
          </YearRatingContainer>
        </ContentContainer>
      </Container>
    </ScLink>
  );
};

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
  overview: PropTypes.string,
  popularity: PropTypes.number,
};

export default Poster;
