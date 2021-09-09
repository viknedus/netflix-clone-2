// styled-components로 준 css스타일은 기본적으로 각각의 컴포넌트에만 로컬화된 형태로 사용되기 때문에 모든 컴포넌트에 줄 글로벌한 스타일을 주기 위해서 GlobalStyles.js를 생성해서 사용했다.
// 일반적으로 스타일 컴포넌트는 각각 다른 컴포넌트들에게 영향을 주지 않기 위해서 로컬형태로 동작하지만 글로벌한 스타일을 주려고 할 때는(reset.css같은 경우) 아래와 같이 만들 수 있다.
// styled-components로부터 가져온 createGlobalStyle함수를 사용해서 만든 globalStyles컴포넌트를 이용해서 모든 컴포넌트들에게 적용될 스타일을 줄 수 있다.
import { createGlobalStyle } from "styled-components";

// styled-component와 함께 사용되는 styled-reset을 이용해서 css를 초기화 시킬 수 있다.
// styled-reset로부터 온 reset은 변수이기 때문에 createGlobalStyle``안에 넣어주고 자바스크립트 형태인 ${reset}을 통해 styled-reset을 적용할 수 있다.
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};

  *{
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
  }

  body{
    background-color: black;
    font-family: 'Noto Sans KR', sans-serif;

    &::-webkit-scrollbar {
      width: 11px;
      height: 11px;
      background: #ffffff;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 7px;
      background-color: #787878;

      &:hover {
        background-color: #C0C0C0;
      }
      &:active{
        background-color: #C0C0C0;
      }
    }

    &::-webkit-scrollbar-track {
      background-color: #101010;
    }
  }
  
  a{
    text-decoration: none;
  }
`;

export default globalStyles;
