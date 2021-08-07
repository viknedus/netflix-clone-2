// HashRouter as Router: HashRouter를 react-router-dom으로부터 가져와서 이름을 바꿔 Router로 사용하도록 한다.
// HashRouter는 약간 앱처럼 보여주면서 사용자 페이지의 Hash를 사용한다. (URL에 #가 붙는다.)
// BrowserRouter는 웹 사이트처럼 보여주면서 HTML history API를 사용한다. (URL에 #가 붙지 않고 일반적인 웹사이트처럼 보인다.)
import { BrowserRouter, HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import Movie from "Routes/Movie";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    // react-router-dom에서 가져온 Route 컴포넌트는 리액트를 통해 라우트로 페이지를 만들고 이동할 수 있다.
    // Route 컴포넌트는 Router 컴포넌트 안에서 사용되어야 한다.
    // path는 URL을 지정할 수 있고 component에는 해당 URL에 왔을 때 보여줄 컴포넌트를 지정한다.
    <Router>
      <Header></Header>

      {/* Switch컴포넌트는 리액트 라우터가 한 번에 오직 하나의 Route만 랜더하게 해준다. */}
      {/* 다시말해, /tv나 /tv/abc가 있다하면 각각 하나의 라우트만 랜더해준다. (다른 라우트를 랜더해주지 않는다.) */}
      {/* 그래서 다른 라우트를 랜더해주기 위해서는 /tv에 exact속성을 넣어줘서 정확히 /tv인 경우에만 TV컴포넌트를 랜더해서 보여주도록 한다. */}
      {/* 만약 배포를 github에 하려고 gh-pages를 설치하고 배포한다면 BrowserRouter보다는 HashRouter를 사용하는 것이 덜 충돌이 생긴다. */}
      <Switch>
        <Route path="/" exact component={Home}></Route>

        <Route path="/movie" exact component={Movie}></Route>
        <Route path="/movie/popular" exact component={Movie}></Route>
        <Route path="/movie/now-playing" exact component={Movie}></Route>
        <Route path="/movie/upcoming" exact component={Movie}></Route>
        <Route path="/movie/top-rated" exact component={Movie}></Route>

        <Route path="/tv" exact component={TV}></Route>
        <Route path="/tv/airing-today" exact component={TV}></Route>
        <Route path="/tv/on-the-air" exact component={TV}></Route>
        <Route path="/tv/top-rated" exact component={TV}></Route>

        {/* 아래와 같이 component가 아닌 render를 통해서도 함수를 실행하고 리턴해서 보여줄 수 있다. */}
        {/* <Route path="/tv/abc" render={() => <h1>TV abc</h1>}></Route> */}
        <Route path="/search" component={Search}></Route>

        {/* id를 받아서 그 id에 해당하는 주소로 갔을 때 Detail컴포넌트를 실행한다. */}
        <Route path="/movie/:id" component={Detail}></Route>
        <Route path="/tv/:id" component={Detail}></Route>

        {/* Redirect컴포넌트는 path경로에 들어왔을 때 일치하는 Route 컴포넌트를 찾고, 일치하는 것이 없다면 / URL로 리다이렉트 시켜버린다. */}
        {/* from="*"는 모든 페이지를 다 리다이렉트 시킬 수 있다는 의미이고, to는 리다이렉트가 발생했을 때 리다이렉트 시켜버리는 URL을 의미한다. */}
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </Router>
  );
};

// Header.js(Header)컴포넌트는 withRouter컴포넌트를 통해 감싸줘야 비로서 props를 받아올 수 있다. (왜냐하면 Header컴포넌트는 정보를 주도록 허락되지 않기 때문이다.)
// 하지만 Router컴포넌트 아래에 있는 Route들은 withRouter컴포넌트를 통해 감싸주지 않아도 기본적으로 리액트 라우터가 Route들에게 props를 전달해준다.
