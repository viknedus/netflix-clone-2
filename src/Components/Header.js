const Header = () => {
  return (
    <header>
      <ul>
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

export default Header;
