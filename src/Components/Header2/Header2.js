import header2 from "./Header2.module.css";

const Header2 = () => {
  return (
    <header className={header2.header}>
      {/* Header.css파일명에 module을 붙여서 css파일을 모듈화 시키게 되면 Header.module.css는 Header.js파일에서만 사용되도록 로컬화 시킬 수 있고 class에는 Header_navList__3TOzg 이런식으로 랜덤한 클래스명이 붙게 된다. */}
      {/* 클래스명은 파일명인 Header와 사용자가 지정한 class이름, 랜덤한 값 형태로 붙어서 Header_navList__3TOzg이런 클래스명으로 붙게 된다. */}
      {/* 랜덤한 값이 클래스명에 붙기 때문에 Header.js가 아닌 다른 js파일에서도 navList라는 이름의 같은 클래스명을 사용할 수 있는 것이다. */}
      <ul className={header2.navList}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/tv">TV</a>
        </li>
        <li>
          <a href="/tv/abc">TV abc</a>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
      </ul>
    </header>
  );
};

export default Header2;
