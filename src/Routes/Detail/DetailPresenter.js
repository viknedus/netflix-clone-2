import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Helmet from "react-helmet";
import noActor from "../../assets/noActor.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const BlurBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: cover;
  filter: blur(5px);
  opacity: 0.35;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  flex-direction: column;
  font-family: "Do Hyeon", sans-serif;
  border: 3px solid red;
`;

const CoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  height: 700px;
  color: white;
  border: 3px solid blue;
`;

const CoverLink = styled.a`
  width: 100%;
`;

const Cover = styled.div`
  width: 100%;
  height: 430px;
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: cover;
  border-radius: 15px;
  box-shadow: rgb(0 0 0 / 50%) 0px 7px 10px, rgb(0 0 0 / 24%) 0px -12px 30px, rgb(0 0 0 / 24%) 0px 4px 6px, rgb(0 0 0 / 34%) 0px 12px 13px, rgb(0 0 0 / 18%) 0px -3px 5px;
  transition: 0.5s;

  &:hover {
    transform: scale(1.03);
  }
`;

const CoverHeading = styled.div`
  display: flex;
`;

const CoverMiddle = styled.div``;

const Data = styled.div`
  padding-left: 30px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 36px;
`;

const SubTitle = styled.h2`
  font-size: 22px;
  margin-top: 25px;
  margin-bottom: 16px;
  font-style: italic;
`;

const GenreContainer = styled.div`
  font-size: 18px;
  color: gray;
  margin-bottom: 6px;
`;

const DateRunTimeContainer = styled.div`
  font-size: 18px;
  color: gray;
`;

const VoteContainer = styled.div`
  font-size: 18px;
  color: white;
  margin-top: 14px;
`;

const VoteStrong = styled.strong`
  font-size: 22px;
  color: dodgerblue;
  margin-left: 7px;
`;

const Divider = styled.span`
  color: gray;
  font-size: 18px;
`;

const Overview = styled.p`
  font-size: 20px;
  line-height: 1.6;
  letter-spacing: 1px;
  margin-top: 30px;
`;

const Item = styled.span``;

const Keywords = styled.span``;

const ActorContainer = styled.div`
  border: 3px solid orange;
`;

const ActorTitle = styled.h1``;

const ActorImageContainer = styled.div`
  border: 3px solid purple;
`;

const ActorImage = styled.div`
  border: 3px solid yellow;
`;

const ActorPhoto = styled.div`
  background: url(${(props) => (props.bgUrl ? `https://image.tmdb.org/t/p/w500${props.bgUrl}` : noActor)}) no-repeat center center;
  background-size: cover;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const ActorName = styled.h2``;

const ActorCharacter = styled.p``;

const DetailPresenter = ({ result, error, loading = true, isMovie, recommendations, cast, keywords, reviews }) => {
  // console.log(result, error, loading);

  return loading ? (
    <Loader></Loader>
  ) : error ? (
    <Message></Message>
  ) : (
    <Container>
      <Helmet>
        <title>{result.title ? result.title : result.name}</title>
      </Helmet>

      {/* {console.log(result.backdrop_path)} */}
      {/* BlurBackground컴포넌트는 result안에 있는 backdrop_path를 가져오고 만약 있으면 https://image.tmdb.org/t/p/original${result.backdrop_path}를, 없으면 noPoster변수를 imageUrl props로 전달한다. */}
      <BlurBackground imageUrl={result.backdrop_path ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` : `https://image.tmdb.org/t/p/original${result.poster_path}`}></BlurBackground>
      <Content>
        <CoverContainer>
          <CoverHeading>
            <CoverLink href={result.homepage ? result.homepage : "#"}>
              <Cover imageUrl={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : `https://image.tmdb.org/t/p/original${result.backdrop_path}`}></Cover>
            </CoverLink>
            <Data>
              <Title>{result.title ? result.title : result.name}</Title>
              <SubTitle>{result.tagline ? result.tagline : ""}</SubTitle>
              <GenreContainer>
                {/* {조건 ? 참: 거짓}과 {조건 && 구문}의 차이점 */}
                {/* {조건 ? 참: 거짓} : 조건이 true이면 참, false이면 거짓을 실행한다. {조건 && 구문} : 조건이 true이면 && 뒤에 구문을 실행한다. */}
                {/* 만약 result.genres가 존재해서 true면 result.genres.map()함수를 실행한다. */}
                {/* result.genres.map()함수는 매개변수로 genres와 index를 받고 index와 result.genres배열의 길이가 같아지면 genre.name를 출력하고 그렇지 않을 때는 genre.name /을 출력한다. */}
                {/* Family / Drama 이런식으로 맨 마지막 장르 Drama에서는 /가 붙지 않게 하기 위해서 아래와 같이 코드를 짰다. */}
                <Item>{result.genres && result.genres.map((genre, index) => (index === result.genres.length - 1 ? genre.name : `${genre.name}▪`))}</Item>
              </GenreContainer>
              <DateRunTimeContainer>
                <Item>{result.release_date ? result.release_date : result.first_air_date}</Item>
                <Divider>▪</Divider>
                <Item>{result.runtime ? result.runtime : result.episode_run_time}분</Item>
              </DateRunTimeContainer>
              <VoteContainer>
                <Item>
                  관람평
                  <VoteStrong>{result.vote_average && result.vote_average}</VoteStrong>
                </Item>
              </VoteContainer>
              <Overview>{result.overview && result.overview}</Overview>
              <Keywords>{keywords ? keywords.map((keyword) => keyword.name + "⭐") : ""}</Keywords>
            </Data>
          </CoverHeading>

          <CoverMiddle>
            <ActorContainer>
              <ActorTitle>배우들</ActorTitle>
              <ActorImageContainer>
                {cast &&
                  cast.map((cast) => {
                    return (
                      <ActorImage>
                        <ActorPhoto bgUrl={cast.profile_path}></ActorPhoto>
                        <ActorName>{cast.name}</ActorName>
                        <ActorCharacter>{cast.character}</ActorCharacter>
                      </ActorImage>
                    );
                  })}
              </ActorImageContainer>
            </ActorContainer>
          </CoverMiddle>
        </CoverContainer>
      </Content>
    </Container>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
