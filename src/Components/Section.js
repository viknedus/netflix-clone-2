import PropTypes from "prop-types";
import styled from "styled-components";

// styled-component를 이용해서 div태그를 생성해서 그것을 변수에 담아서 리액트 컴포넌트 형태로 사용할 수 있도록 한다.
const Container = styled.div`
  padding: 40px;
  padding-top: 0px;
  padding-bottom: 0;
  margin-top: 15px;
  /* border: 3px solid yellow; */

  /* :not(:last-child)를 통해 마지막 Container를 제외한 나머지 것들에 스타일을 준다. */
  :not(:last-child) {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    margin-top: 0px;
  }
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
  font-size: 18px;
`;

const Children = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  max-width: 2400px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

// children은 리액트가 가지고 있는 예약된 props이다.
// {title}과 {children}을 통해 title과 children의 데이터를 Title과 Children컴포넌트 안에 넣어준다.
// react에서 children은 일반적으로 컴포넌트 사이의 값을 받아온다.
// 여기서는 예를들면 HomePresenter.js에서 건네준 <Section>movie</Section> Section컴포넌트의 사이의 movie 값을 받는다.
const Section = ({ title, children }) => {
  return (
    <Container>
      {/* <Title>{title}</Title> */}
      <Children>{children}</Children>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Section;
