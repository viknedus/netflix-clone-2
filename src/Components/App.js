import React from "react";
import Router from "./Router";
import Header from "./Header";

function App() {
  return (
    // 리액트에서는 두 개 이상의 컴포넌트를 리턴할 수 없는 규칙이 있다.
    // 그래서 리액트에서는 아래와 같이 크게 하나의 태그로 묶어줘야 하고 이 묶어주는 태그를 Fragment라고 부른다.
    <div className="App">
      <h1>App</h1>
      <Header></Header>
      <Router />
    </div>
  );
}

export default App;
