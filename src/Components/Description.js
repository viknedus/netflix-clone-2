import styled from "styled-components";
import iconTV from "../assets/icon_tv.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescContainer = styled.div`
  border: 3px solid blue;
  width: 1300px;
`;

const DescContent = styled.div`
  border: 3px solid orange;
  padding: 80px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DescTitle = styled.div`
  color: white;
  flex: 1;
`;

const DescH1 = styled.h1`
  font-size: 40px;
`;

const DescP = styled.p`
  font-size: 25px;
`;

const DescImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const DescImage = styled.img`
  width: 500px;
`;

const Description = () => {
  return (
    <Container>
      <DescContainer>
        <DescContent>
          <DescTitle>
            <DescH1>TV로 즐기세요.</DescH1>
            <DescP>스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</DescP>
          </DescTitle>
          <DescImageContainer>
            <DescImage src={iconTV}></DescImage>
          </DescImageContainer>
        </DescContent>
        <DescContent>
          <DescTitle>
            <DescH1>TV로 즐기세요.</DescH1>
            <DescP>스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</DescP>
          </DescTitle>
          <DescImageContainer>
            <DescImage src={iconTV}></DescImage>
          </DescImageContainer>
        </DescContent>
        <DescContent>
          <DescTitle>
            <DescH1>TV로 즐기세요.</DescH1>
            <DescP>스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</DescP>
          </DescTitle>
          <DescImageContainer>
            <DescImage src={iconTV}></DescImage>
          </DescImageContainer>
        </DescContent>
        <DescContent>
          <DescTitle>
            <DescH1>TV로 즐기세요.</DescH1>
            <DescP>스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</DescP>
          </DescTitle>
          <DescImageContainer>
            <DescImage src={iconTV}></DescImage>
          </DescImageContainer>
        </DescContent>
      </DescContainer>
    </Container>
  );
};

export default Description;
