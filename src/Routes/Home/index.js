// 작은 프로젝트가 아닌 조금 규모가 있는 프로젝트를 할 때는 이것처럼 Home폴더를 따로 만들고 Home폴더안에 index.js와 HomeContainer.js등등의 파일을 모아놓고 관리하는 것이 좋다.
// 이와 같은 방법을 컨테이너 프리젠터 패턴이라고 부른다.
// 그리고 아래와 같이 3개의 파일로 나눠서 관리한다. (리액트가 index.js를 가장 기본적으로 읽기 때문에 index.js가 필요함)
// 컨테이너(HomeContainer.js)는 data를 가지고, state값을 가지고, api를 불러와서 모든 로직을 처리한다. (데이터 담당)
// 프리젠터(HomePresenter.js)는 컨테이너가 처리한 데이터들을 보여주는 역할을 하는 함수형 컴포넌트이다. (state, api, 클래스를 다루지는 않는다.) (스타일 담당)
import HomeContainer from "./HomeContainer";

export default HomeContainer;
