import styled from "styled-components";
import loadingBar from "../assets/loading.svg";

const Container = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img``;

const Title = styled.h1`
  color: white;
  font-size: 18px;
  margin-top: 10px;
`;

const Loader = () => (
  <Container>
    {/* 현재는 이모지를 span태그로 감싸지 않아도 되지만, 예전 리액트에서는 이모지를 쓸 때 시각장애인들로 하여금 스크린을 읽을 수 있도록 아래와 같이 span태그로 감싸주고 role속성과 aria-label속성을 써줘야 했다. (필수는 아니고 경고창이 뜸) */}
    {/* role에는 span안의 데이터가 img(이미지)라고 말해주고, aria-label에는 아래 이미지가 Loading 이미지라고 설명해주는 것이다. */}
    <LoadingContainer role="img" aria-label="Loading">
      <Image src={loadingBar}></Image>
      <Title>Loading...</Title>
    </LoadingContainer>
  </Container>
);

export default Loader;
