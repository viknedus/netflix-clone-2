import HomeContainer from "./HomeContainer";

export default HomeContainer;

/*
작은 프로젝트가 아닌 조금 규모가 있는 프로젝트를 할 때는 지금처럼 Home폴더를 따로 만들고 Home폴더안에 index.js와 HomeContainer.js, HomePresenter.js 3개의 파일을 생성해서 관리하는 것이 좋다.
리액트에서 경로를 지정할 때 폴더의 경로까지만 지정하게 되면 기본적으로 index.js를 읽기 때문에 index.js가 필요하다.
이와 같은 방법을 컨테이너 프리젠터 패턴이라고 부른다.

컨테이너 프리젠터 패턴이란?
컨테이너(Container) : data와 state(상태값)를 가지고, api를 호출하고, 기타 모든 로직들을 처리한다. (데이터를 받아와서 처리하는 것을 담당함)
프리젠터(Presenter) : 컨테이너가 처리한 데이터들을 화면에 뿌려주는 역할을 하는 함수형 컴포넌트이다.
프리젠터는 state(상태값), api, 클래스 등을 다루지 않는다. (데이터를 화면에 뿌려주고 스타일을 담당함)
*/
