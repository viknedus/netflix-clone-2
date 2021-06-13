// 리액트에서 컴포넌트에 CSS 스타일을 주는 방법은 여러가지가 있다.
// Header2처럼 폴더를 따로 만들고 거기에 index.js와 Header2.module.css를 통해 스타일을 줄 수도 있고 아래와 같이 styled-component를 이용할 수도 있다.
// 스타일 컴포넌트를 사용하기 위해 import해왔다.
import styled from "styled-components";
// react-router-dom으로부터 withRouter를 가져와서 사용할 수 있다.
// withRouter는 다른 컴포넌트를 감싸는 컴포넌트로서 라우터에 어떠한 정보를 준다.
// 아래에 Header컴포넌트를 withRouter(Header)로 감싸서 사용할 수 있다.
import { Link, withRouter } from "react-router-dom";

// 스타일 컴포넌트를 이용하면 해당 태그를 이용해서 새로운 이름의 컴포넌트를 사용자가 생성할 수 있다.
// const ScHeader = styled.header``는 스타일 컴포넌트(styled)를 이용해서 header태그를 새로운 ScHeader컴포넌트로 생성한 것이다.
// 주의할 점은 컴포넌트를 생성할 때는 반드시 첫 글자는 대문자로 시작해야 한다. (scHeader->오류, ScHeader로 생성해야 한다.)
// 그리고 그 header태그에 줄 CSS스타일은 ``안에 적어주면 된다.
// ``안에 스타일을 적을 때는 sass(scss)문법으로 적을 수 있다.
// 스타일 컴포넌트를 사용할 때 기존의 HTML태그는 styled.ul 이런 식으로 사용하고 react가 가지고 있는 컴포넌트는 styled(Link) 이렇게 사용한다.
const ScHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  padding: 0 10px;
  background-color: gray;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const ScUl = styled.ul`
  display: flex;
`;

const ScLi = styled.li`
  width: 70px;
  text-align: center;
  /* 스타일 컴포넌트는 아래의 ScLi컴포넌트가 가지고 있는 props를 가져와서 그 값의 조건에 해당하는 값을 할당해줄 수 있다. */
  /* ScLi컴포넌트가 가지고 있는 current={true}를 props로는 {current:true}로 가져와서 props.current를 통해 true값을 가져올 수 있는 것이다. */
  /* $안에 자바스크립트 코드를 쓸 수 있고 삼항연산자를 이용할 수 있다. */
  /* 아래 코드는 props를 인자로 받아서 props안에 current값을 검사해서 있다면 true를 없다면 false를 반환해서 border-bottom의 스타일을 준다. */
  border-bottom: 3px solid ${(props) => (props.current ? "black" : "transparent")};
`;

const ScLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Header함수의 ()괄호 안에 인자에 props로 값을 받아올 수도 있고 props객체 안에 있는 바로 프로퍼티를 꺼내올 수도 있다.
// 인자로 받아오는 props값은 특정 컴포넌트들로부터 전달받은 정보들이다.
// 예를들어 /tv 라우트로 들어가게 되면 TV컴포넌트를 보여줄 것이고 TV컴포넌트로부터 해당 컴포넌트의 정보들을 props로 전달받게 되는 것이다.
// props객체안에 location객체안에 pathname값을 바로 꺼내왔다.
const Header = ({ location: { pathname } }) => {
  // console.log(pathname);

  return (
    <ScHeader>
      {/* 스타일 컴포넌트 모듈을 사용해서 React에서 HTML태그에 CSS 스타일을 줄 때는 ul 태그 대신 위에서 변수를 만들고 그 만든 변수 List로 태그명을 바꿔준다. */}
      <ScUl>
        {/* 스타일 컴포넌트에서는 사용자가 만든 스타일 컴포넌트 각각에게 props를 줄 수 있다. */}
        {/* 예를들면 아래와 같이 current라는 props를 주고 current의 props값에 따라 true나 false를 반환하게 할 수 있다. */}
        {/* 여기서는 current가 true가 되면 ScLi에 border-bottom에 색깔을 주고 false가 되면 투명하게 처리했다. */}
        {/* pathname==="/"을 통해 pathname이 /가 되면 해당 라우트에 들어왔기 때문에 true를 반환하게 해주는 것이다. */}
        <ScLi current={pathname === "/"}>
          {/* a태그 대신 react-router-dom에서 제공하는 Link컴포넌트를 사용했다. */}
          {/* Link컴포넌트는 a태그처럼 href속성을 쓰지 않고 to속성을 사용한다. */}
          <ScLink to="/">Home</ScLink>
        </ScLi>
        <ScLi current={pathname === "/tv"}>
          <ScLink to="/tv">TV</ScLink>
        </ScLi>
        <ScLi current={pathname === "/search"}>
          <ScLink to="/search">Search</ScLink>
        </ScLi>
      </ScUl>
    </ScHeader>
  );
};

// Header컴포넌트를 withRouter컴포넌트로 감싸줌으로서 Header컴포넌트의 인자로 props값을 받을 수 있다.
// props는 리액트 라우터로부터 받은 객체로 history, location, match등의 객체가 들어있다.
// withRouter덕분에 여러 다른 컴포넌트와 연결하고 props객체를 받아올 수 있는 것이다.
export default withRouter(Header);
