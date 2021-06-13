import axios from "axios";

// axios가 가지고 있는 create()함수를 이용해서 함수 내부에 객체형태로 axios의 초기설정을 해줄 수 있다.
// baseURL에는 API를 요청하는 기본 URL을, params에는 URL에 들어가는 api_key와 language에 대한 정보를 객체형태로 적어준다.
// params 객체 안에 입력한 값들은 baseURL의 URL주소 뒤에 붙어서 들어간다.
// (ex: https://api.themoviedb.org/3/tv/popular?api_key=d20d691c4dcca268fa8e0c655d698616&language=en-US)
// 아래와 같이 설정해주게 되면 이제 우리가 API를 요청할 때 아래에 설정한 값들을 가지고 요청하게 된다.
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "d20d691c4dcca268fa8e0c655d698616",
    language: "en-US",
  },
});

// 위에 설정을 해줬다면 이젠 get()함수를 통해 get방식으로 해당 주소로 API를 요청하면 된다.
// 주의할 점은 /tv/popular가 아닌 tv/popular로 써줘야 한다.
// 만약 /로 시작하게 되면 그것은 절대경로를 의미하고 그렇다면 위에 baseURL의 URL을 덮어씌워버리기 때문이다.
// 우리는 상대경로를 써서 https://api.themoviedb.org/3/tv/popular로 요청해야 한다.
api.get("tv/popular");

export default api;
