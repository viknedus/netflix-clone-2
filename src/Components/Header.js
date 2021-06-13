// 리액트에서 컴포넌트에 CSS 스타일을 주는 방법은 여러가지가 있다.
// Header2처럼 폴더를 따로 만들고 거기에 index.js와 Header2.module.css를 통해 스타일을 줄 수도 있고 아래와 같이 styled-component를 이용할 수도 있다.
// 스타일 컴포넌트를 사용하기 위해 import해왔다.
import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

const ScLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return (
    <ScHeader>
      {/* 스타일 컴포넌트 모듈을 사용해서 React에서 HTML태그에 CSS 스타일을 줄 때는 ul 태그 대신 위에서 변수를 만들고 그 만든 변수 List로 태그명을 바꿔준다. */}
      <ScUl>
        <ScLi>
          {/* a태그 대신 react-router-dom에서 제공하는 Link컴포넌트를 사용했다. */}
          {/* Link컴포넌트는 a태그처럼 href속성을 쓰지 않고 to속성을 사용한다. */}
          <ScLink to="/">Home</ScLink>
        </ScLi>
        <ScLi>
          <ScLink to="/tv">TV</ScLink>
        </ScLi>
        <ScLi>
          <ScLink to="/search">Search</ScLink>
        </ScLi>
      </ScUl>
    </ScHeader>
  );
};

export default Header;
