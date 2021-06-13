// styled-components는 Local로 동작하기 때문에 Global한 css를 만들어 주기 위해 GlobalStyles.js 생성했다.
// 일반적으로 스타일 컴포넌트는 각기 다른 컴포넌트들에게 스타일의 영향을 주지 않기 위해서 Local로 동작하지만 글로벌한 스타일이 필요할 때는(reset.css같은 경우) 아래와 같이 만들어줄 수 있다.
// 이 때 사용하는 것이 styled-components로부터 가져온 createGlobalStyle함수이다.
// createGlobalStyle함수를 사용하면 Local설정을 Global설정으로 적용할 수 있게 해준다.
import { createGlobalStyle } from "styled-components";

// styled-reset를 이용해서 css를 초기화 시킬 수 있다.
// reset은 아래처럼 createGlobalStyle``안에 넣어주고 ${reset}을 통해 적용할 수 있다.
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  body{
    background-color: lightgray;
    padding-top: 60px;
  }
  a{
    text-decoration: none;
  }
`;

export default globalStyles;
