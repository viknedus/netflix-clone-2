import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 0px;
  border-top: 1px solid rgb(25, 25, 25);
`;

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
  width: 500px;
`;

const FooterLinkTitle = styled.h1`
  color: rgb(108, 117, 125);
  font-size: 17px;
`;

const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const FooterLink = styled.a`
  color: rgb(108, 117, 125);
  font-size: 14px;
  width: 110px;
  margin-bottom: 21px;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterDescContainer = styled.div`
  margin-top: 30px;
`;

const FooterDescTitle = styled.h1`
  color: rgb(108, 117, 125);
  font-size: 13px;
`;

const FooterDescRights = styled.h2`
  color: white;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinkContainer>
          <FooterLinkTitle>질문이 있으신가요?</FooterLinkTitle>
          <FooterLinkContent>
            <FooterLink href="https://help.netflix.com/ko/node/412">넷플릭스 소개</FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">고객 센터</FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">미디어 센터</FooterLink>
            <FooterLink href="https://help.netflix.com/legal/termsofuse">이용약관</FooterLink>
            <FooterLink href="https://help.netflix.com/legal/privacy">개인정보</FooterLink>
            <FooterLink href="https://help.netflix.com/legal/corpinfo">회사정보</FooterLink>
            <FooterLink href="https://help.netflix.com/ko/contactus">문의하기</FooterLink>
            <FooterLink href="https://help.netflix.com/legal/notices">법적 고지</FooterLink>
            <FooterLink href="https://ir.netflix.net/ir-overview/profile/default.aspx">투자 정보</FooterLink>
            <FooterLink href="https://jobs.netflix.com/">입사 정보</FooterLink>
            <FooterLink href="https://fast.com/ko/">속도 테스트</FooterLink>
            <FooterLink href="https://www.netflix.com/kr/browse/genre/839338">오직 넷플릭스에서</FooterLink>
          </FooterLinkContent>
        </FooterLinkContainer>
        <FooterDescContainer>
          {/* <FooterDescTitle>넷플릭스 대한민국</FooterDescTitle> */}
          <FooterDescRights>© 2021 GW. ALL RIGHTS RESERVED.</FooterDescRights>
        </FooterDescContainer>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
