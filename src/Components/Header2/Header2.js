import header2 from "./Header2.module.css";

const Header2 = () => {
  return (
    <header>
      {/* Header.css에 module을 붙여서 모듈화 시키게 되면 ul의 class에는 Header_navList__3TOzg 이런식으로 랜덤한 값이 붙게 된다. */}
      {/* 랜덤한 값이 붙게 되기 때문에 Header.js가 아닌 다른 js파일에서도 Header가 가지고 있는 navList라는 이름을 className으로 쓸 수 있게 되는 것이다. */}
      <ul className={header2.navList}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/tv">TV</a>
        </li>
        {/* 
        <li>
          <a href="/tv/abc">TV abc</a>
        </li>
         */}
        <li>
          <a href="/search">Search</a>
        </li>
      </ul>
    </header>
  );
};

export default Header2;
