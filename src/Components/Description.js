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
  flex: 0.8;
  padding: 0 75px;
`;

const DescH1 = styled.h1`
  font-size: 45px;
  margin-bottom: 20px;
  line-height: 1.3;
  font-weight: bold;
`;

const DescP = styled.p`
  font-size: 27px;
  line-height: 1.6;
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
          <DescImageContainer>
            <DescImage src={iconTV}></DescImage>
          </DescImageContainer>
          <DescTitle>
            <DescH1>
              즐겨 보는 콘텐츠를 저장해
              <br />
              오프라인으로 시청하세요.
            </DescH1>
            <DescP>간편하게 저장하고 빈틈없이 즐겨보세요.</DescP>
          </DescTitle>
        </DescContent>
        <DescContent>
          <DescTitle>
            <DescH1>
              다양한 디바이스에서
              <br />
              시청하세요.
            </DescH1>
            <DescP>각종 영화와 TV 프로그램을 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.</DescP>
          </DescTitle>
          <DescImageContainer>
            <DescImage src={iconTV}></DescImage>
          </DescImageContainer>
        </DescContent>
        <DescContent>
          <DescImageContainer>
            <DescImage src={iconTV}></DescImage>
          </DescImageContainer>
          <DescTitle>
            <DescH1>
              어린이 전용 프로필을
              <br />
              만들어 보세요.
            </DescH1>
            <DescP>자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.</DescP>
          </DescTitle>
        </DescContent>
      </DescContainer>
    </Container>
  );
};

export default Description;
