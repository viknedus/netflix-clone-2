import React from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";

// Header폴더 안에 index.js파일을 만들고 import Header from "Components/Header"처럼 import 하게 되면 기본적으로 Components/Header폴더 안에서 index.js파일을 찾아서 가져온다.
// 원래는 Components/Header/Header를 통해 Header.js를 찾아서 가져와야 했지만 Header폴더를 따로 만들고 거기 안에 index.js를 만들어서 index.js에 Header.js를 가져오는 형태로도 만들 수 있다.
// import Header2 from "Components/Header2";

function App() {
  return (
    // 리액트에서는 두 개 이상의 컴포넌트를 리턴할 수 없는 규칙이 있다.
    // 그래서 리액트에서는 아래와 같이 크게 하나의 태그로 묶어줘야 하고 이 묶어주는 태그를 Fragment라고 부른다.
    <div className="App">
      <h1>App</h1>
      {/* <Header2></Header2> */}
      <Router />
      <GlobalStyles />
    </div>
  );
}

export default App;
