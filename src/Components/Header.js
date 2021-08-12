// 리액트에서 컴포넌트에 CSS 스타일을 주는 방법은 여러가지가 있다.
// Header2처럼 폴더를 따로 만들고 거기에 index.js와 Header2.module.css를 통해 스타일을 줄 수도 있고 아래와 같이 styled-component를 이용할 수도 있다.
// 스타일 컴포넌트를 사용하기 위해 import해왔다.
import styled from "styled-components";

// react-router-dom으로부터 withRouter를 가져와서 사용할 수 있다.
// withRouter는 다른 컴포넌트를 감싸는 컴포넌트로서 라우터에 어떠한 정보를 준다.
// 아래에 Header컴포넌트를 withRouter(Header)로 감싸서 사용할 수 있다.
import { Link, withRouter } from "react-router-dom";

import netflixLogo from "../assets/netflix_logo.svg";

// 스타일 컴포넌트를 이용하면 해당 태그를 이용해서 새로운 이름의 컴포넌트를 생성할 수 있다.
// const HeaderContainer = styled.header``는 스타일 컴포넌트와 header태그를 이용해서 새로운 HeaderContainer컴포넌트를 생성한 것이다.
// 주의할 점은 컴포넌트를 생성할 때는 반드시 첫 글자는 대문자로 시작해야 한다. (headerContainer->오류남, HeaderContainer로 생성해야 함)
// 그리고 그 header태그에 줄 css스타일을 ``안에 적어주면 된다.
// ``안에 스타일을 적을 때는 sass(scss)문법으로 적을 수도 있다.
// 스타일 컴포넌트를 사용할 때 HTML태그는 styled.ul 이런 식으로 사용하고 react에서 사용하는 컴포넌트는 styled(Link) 형태로 쓴다.
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  /* background-color: transparent; */
  /* background-color: black; */
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  z-index: 100;
  padding: 0 40px;
  width: 100%;

  @media (max-width: 768px) {
    border: 3px solid red;
    display: none;
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Image = styled.div`
  background: url(${netflixLogo}) no-repeat center center;
  background-size: 150px;
  margin-right: auto;
  width: 160px;
`;

const Li = styled.li`
  width: 140px;
  text-align: center;
  font-size: 20px;

  /* 아래 ScLi컴포넌트가 가지고 있는 props를 가져와서 props 값의 조건에 따라 각각 다른 값을 할당해줄 수 있다. */
  /* 만약 ScLi컴포넌트가 props로 current={true}를 가지고 있다면 props.current를 통해 true값을 여기에 가져올 수 있다. */
  /* $안에 자바스크립트 코드를 쓸 수 있고, 자바스크립트의 삼항연산자를 이용할 수 있다. */
  /* props를 매개변수로 받아서 props안에 current값을 체크해서 값이 있다면 true를, 없다면 false를 반환해서 border-bottom의 스타일을 준다. */
  border-bottom: 3px solid ${(props) => (props.current ? "#E30914" : "transparent")};
`;

// 스타일 컴포넌트를 사용할 때 기존의 HTML태그는 styled.ul 형태로 사용하고, react에서 사용하는 컴포넌트는 styled(Link) 형태로 사용한다.
// Link라는 것은 HTML태그가 아니고 react에 있는 컴포넌트이기 때문에 styled(Link) 형태로 써준다.
const ScLink = styled(Link)`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.current ? "#E30914" : "white")};
`;

// Header함수의 ()괄호 안에 인자에 props로 값을 받아올 수도 있고 props객체 안에 있는 바로 프로퍼티를 꺼내올 수도 있다.
// 인자로 받아오는 props값은 특정 컴포넌트들로부터 전달받은 정보들이다.
// 예를들어 /tv 라우트로 들어가게 되면 TV컴포넌트를 보여줄 것이고 TV컴포넌트로부터 해당 컴포넌트의 정보들을 props로 전달받게 되는 것이다.
// props객체안에 location객체안에 pathname값을 바로 꺼내왔다.
const Header = ({ location: { pathname } }) => {
  // console.log(pathname);

  return (
    <HeaderContainer>
      {/* 스타일 컴포넌트 모듈을 사용해서 React에서 HTML태그에 CSS 스타일을 줄 때는 ul 태그 대신 위에서 변수를 만들고 그 만든 변수 List로 태그명을 바꿔준다. */}
      <Ul>
        <Image>
          <ScLink to="/"></ScLink>
        </Image>

        {/* 스타일 컴포넌트 각각에게 props를 줄 수 있다. */}
        {/* 예를들면 사용자가 아래와 같이 current라는 props를 주고 current의 props값에 따라 true나 false를 반환하게 할 수 있다. */}
        {/* 여기서는 current가 true가 되면 ScLi에 border-bottom에 색깔을 주고 false가 되면 투명하게 처리했다. */}
        {/* pathname==="/"을 통해 pathname이 /가 되면 해당 라우트에 들어왔기 때문에 true를 반환하게 해주는 것이다. */}
        <Li current={pathname === "/" && true}>
          {/* a태그 대신 react-router-dom에서 제공하는 Link컴포넌트를 사용했다. */}
          {/* Link컴포넌트는 a태그의 href속성을 사용하지 않고 to속성을 사용한다. */}
          <ScLink to="/" current={pathname === "/" && true}>
            홈
          </ScLink>
        </Li>
        <Li current={pathname.includes("/movie") && true}>
          <ScLink to="/movie" current={pathname.includes("/movie") && true}>
            영화
          </ScLink>
        </Li>
        <Li current={pathname.includes("/tv") && true}>
          <ScLink to="/tv" current={pathname.includes("/tv") && true}>
            TV
          </ScLink>
        </Li>
        <Li current={pathname.includes("/search") && true}>
          <ScLink to="/search" current={pathname.includes("/search") && true}>
            검색
          </ScLink>
        </Li>
      </Ul>
    </HeaderContainer>
  );
};

// withRouter컴포넌트는 다른 컴포넌트를 감싸는 컴포넌트로서 Header컴포넌트를 감싸주면, Header컴포넌트는 매개변수로 props값을 받아올 수 있다. (원래는 매개변수로 props를 받아오면 아무 값도 받아오지 못함)
// 매개변수로 받아온 props에는 react-router-dom으로부터 받은 정보들이 있고 그 정보들은 객체 형태로 그 안에는 history, location, match등의 객체가 있다.
// withRouter 컴포넌트 덕분에 여러 컴포넌트들과 연결해서 props 데이터를 받아올 수 있는 것이다.
export default withRouter(Header);
