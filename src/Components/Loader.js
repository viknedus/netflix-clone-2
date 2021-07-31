import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 100px;
  margin-top: 20px;
`;

const Loader = () => (
  <Container>
    {/* 현재는 이모지를 span태그로 감싸지 않아도 되지만, 예전 리액트에서는 이모지를 쓸 때 시각장애인들로 하여금 스크린을 읽을 수 있도록 아래와 같이 span태그로 감싸주고 role속성과 aria-label속성을 써줘야 했다. (필수는 아니고 경고창이 뜸) */}
    {/* role에는 span안의 데이터가 img(이미지)라고 말해주고, aria-label에는 아래 이미지가 Loading 이미지라고 설명해주는 것이다. */}
    <span role="img" aria-label="Loading">
      ⏰
    </span>
  </Container>
);

export default Loader;
