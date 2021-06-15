// 아래 코드대신 export default ()=>"Home"으로도 쓸 수 있다.
// export default () => "Home"는 Home을 리턴하는 하나의 함수를 기본값으로 export하겠다는 의미이다.
const Home2 = () => {
  return <h1>Home2</h1>;
};

export default Home2;
