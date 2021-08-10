import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Helmet from "react-helmet";
import noPoster from "../../assets/noPoster.png";
import noActor from "../../assets/noActor.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  height: 400vh;
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
  justify-content: flex-start;
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
  margin-top: 50px;
  /* border: 3px solid blue; */
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

const Keywords = styled.div`
  margin-top: 35px;
`;

const KeywordTitle = styled.h1`
  font-size: 18px;
  color: gray;
`;

const KeywordContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 15px;
`;

const KeywordSpan = styled.span`
  color: #fed330;
  border: 1px solid #fed330;
  background-color: transparent;
  padding: 7px 12px;
  box-sizing: border-box;
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 17px;
  border-radius: 5px;

  &:hover {
    color: white;
    background-color: #fed330;
  }
`;

const TeaserContainer = styled.div`
  border-top: 1px solid gray;
  margin-top: 100px;
  padding-top: 30px;
`;

const TeaserTitle = styled.h1`
  font-size: 25px;
`;

const TeaserVideo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const IframeContainer = styled.div``;

const Iframe = styled.iframe`
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;

const IframeDesc = styled.h2`
  margin-top: 10px;
  font-size: 20px;
`;

const ActorContainer = styled.div`
  border-top: 1px solid gray;
  margin-top: 100px;
  padding-top: 30px;
`;

const ActorTitle = styled.h1`
  font-size: 25px;
`;

const ActorImageContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const ActorImage = styled.div`
  margin-right: 30px;
  text-align: center;
  width: 120px;

  &:last-child {
    margin-right: 0;
  }
`;

const ActorPhoto = styled.div`
  background: url(${(props) => (props.bgUrl ? `https://image.tmdb.org/t/p/w500${props.bgUrl}` : noActor)}) no-repeat center center;
  background-size: cover;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  border: 5px solid white;

  &:hover {
    border: 5px solid #fed330;
    transform: scale(1.08);
  }
`;

const ActorName = styled.h2`
  margin-top: 15px;
  height: 30px;
  font-size: 16px;
`;

const ActorCharacter = styled.p`
  color: gray;
  margin-top: 10px;
  font-size: 14px;
`;

const CompanyContainer = styled.div`
  /* border-top: 1px solid gray; */
  margin-top: 100px;
`;

const CompanyTitle = styled.div`
  font-size: 25px;
`;

const CompanyContent = styled.div`
  margin-top: 30px;
`;

const CompanyName = styled.h2`
  font-size: 20px;
  margin-top: 20px;
`;

const CompanyImage = styled.div`
  background: url(${(props) => (props.bgUrl ? `https://image.tmdb.org/t/p/w500${props.bgUrl}` : noPoster)}) no-repeat center left;
  background-size: contain;
  height: 70px;
  max-height: 70px;
`;

const CompanyMoney = styled.div`
  font-size: 25px;
  margin-top: 35px;
  display: flex;
  justify-content: center;
  color: #fed330;
`;

const CompanyDivider = styled.div`
  margin: 0 8px;
`;

const Budget = styled.h2``;

const Revenue = styled.h2``;

const SplideContainer = styled.div`
  border-top: 1px solid gray;
  margin-top: 100px;
  padding-top: 30px;
`;

const SplideTitle = styled.h1`
  font-size: 25px;
  margin-bottom: 30px;
`;

const SplideLink = styled.a`
  height: 100%;
  display: inline-block;
`;

const SplideImage = styled.img`
  width: 100%;
  cursor: pointer;
`;

const DetailPresenter = ({ result, error, loading = true, isMovie, recommendations, cast, keywords, reviews, changes }) => {
  // console.log(result, error, loading);

  console.log("changes", changes);

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
                  평점
                  <VoteStrong>{result.vote_average && result.vote_average}</VoteStrong>
                </Item>
              </VoteContainer>
              <Overview>{result.overview && result.overview}</Overview>
              <Keywords>
                <KeywordTitle>키워드</KeywordTitle>
                <KeywordContent>{keywords ? keywords.map((keyword) => <KeywordSpan>{"#" + keyword.name}</KeywordSpan>) : ""}</KeywordContent>
              </Keywords>
            </Data>
          </CoverHeading>

          <CoverMiddle>
            <ActorContainer>
              <ActorTitle>배우</ActorTitle>
              <ActorImageContainer>
                {cast &&
                  cast.map((cast, index) =>
                    index < 7 ? (
                      <ActorImage>
                        <ActorPhoto bgUrl={cast.profile_path}></ActorPhoto>
                        <ActorName>{cast.name}</ActorName>
                        <ActorCharacter>{cast.character}</ActorCharacter>
                      </ActorImage>
                    ) : (
                      ""
                    )
                  )}
              </ActorImageContainer>

              <CompanyContainer>
                <CompanyTitle>제작사</CompanyTitle>
                <CompanyContent>
                  <CompanyImage bgUrl={result.production_companies[0].logo_path}></CompanyImage>
                  <CompanyName>
                    {result.production_companies[0].name} ({result.production_companies[0].origin_country})
                  </CompanyName>
                </CompanyContent>
                <CompanyMoney>
                  <Budget>예산: ${result.budget.toLocaleString("KR")}</Budget>
                  <CompanyDivider>/</CompanyDivider>
                  <Revenue>수익: ${result.revenue.toLocaleString("KR")}</Revenue>
                </CompanyMoney>
              </CompanyContainer>
            </ActorContainer>

            <TeaserContainer>
              <TeaserTitle>트레일러</TeaserTitle>
              <TeaserVideo>
                {result.videos && result.videos.results[0] && result.videos.results[0].key && (
                  <IframeContainer>
                    <Iframe
                      src={`https://www.youtube.com/embed/${result.videos.results[0].key}?playlist=${result.videos.results[0].key}`}
                      width="420"
                      height="280"
                      frameborder="0"
                      allow="autoplay; fullscreen"
                    ></Iframe>
                    <IframeDesc>{result.videos.results[0].name && result.videos.results[0].name}</IframeDesc>
                  </IframeContainer>
                )}

                {result.videos && result.videos.results[1] && result.videos.results[1].key && (
                  <IframeContainer>
                    <Iframe
                      src={`https://www.youtube.com/embed/${result.videos.results[1].key}?playlist=${result.videos.results[1].key}`}
                      width="420"
                      height="280"
                      frameborder="0"
                      allow="autoplay; fullscreen"
                    ></Iframe>
                    <IframeDesc>{result.videos.results[1].name && result.videos.results[1].name}</IframeDesc>
                  </IframeContainer>
                )}

                {result.videos && result.videos.results[2] && result.videos.results[2].key && (
                  <IframeContainer>
                    <Iframe
                      src={`https://www.youtube.com/embed/${result.videos.results[2].key}?playlist=${result.videos.results[2].key}`}
                      width="420"
                      height="280"
                      frameborder="0"
                      allow="autoplay; fullscreen"
                    ></Iframe>
                    <IframeDesc>{result.videos.results[2].name && result.videos.results[2].name}</IframeDesc>
                  </IframeContainer>
                )}
              </TeaserVideo>
            </TeaserContainer>

            <SplideContainer>
              <SplideTitle>스틸컷</SplideTitle>
              <Splide
                options={{
                  rewind: true,
                  perPage: 3,
                  perMove: 1,
                  gap: "1rem",
                }}
              >
                {changes &&
                  changes.map(
                    (image) =>
                      image.action &&
                      image.action === "added" &&
                      image.value &&
                      image.value.backdrop &&
                      image.value.backdrop.file_path && (
                        <SplideSlide>
                          <SplideLink href={`https://image.tmdb.org/t/p/original${image.value.backdrop.file_path}`} target="_blank">
                            <SplideImage src={`https://image.tmdb.org/t/p/original${image.value.backdrop.file_path}`} alt="" />
                          </SplideLink>
                        </SplideSlide>
                      )
                  )}
              </Splide>
            </SplideContainer>
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
