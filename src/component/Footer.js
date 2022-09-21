import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <HelpWrapper>
                    <CSInfo>
                        <CenterTitle>
                            고객행복센터
                            <CenterTime>365일 오전 7시 - 오후 7시</CenterTime>
                        </CenterTitle>
                        <CenterNumber>1644-1107</CenterNumber>
                        <ContactWrapper>
                            <KaTalkQA>카카오톡 문의</KaTalkQA>
                            <OneQA>1:1 문의</OneQA>
                            <BulkQA>대량주문 문의</BulkQA>
                        </ContactWrapper>
                        <EtcQA>
                            비회원 문의 : help@kurlycorp.com
                            <br />
                            비회원 대량주문 문의 : kurlygift@kurlycorp.com
                        </EtcQA>
                    </CSInfo>
                    <CurlyInfo>
                        <NotificationWrapper>
                            <List1>컬리소개</List1>
                            <List2>컬리소개영상</List2>
                            <List3>인재채용</List3>
                            <List4>이용약관</List4>
                            <List5>개인정보처리방침</List5>
                            <List6>이용안내</List6>
                        </NotificationWrapper>
                        <CommonInfoWrapper>
                            법인명 (상호) : 주식회사 컬리
                            <InfoSpan></InfoSpan>
                            사업자등록번호 : 261-81-23567
                            <span
                                style={{
                                    marginLeft: "3px",
                                    color: "rgb(95, 0, 128)",
                                }}
                            >
                                사업자정보 확인
                            </span>
                            <br />
                            통신판매업 : 제 2018-서울강남-01646 호
                            <InfoSpan></InfoSpan> 개인정보보호책임자 : 이원준
                            <br />
                            주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동){" "}
                            <InfoSpan></InfoSpan>
                            대표이사 : 김슬아
                            <br />
                            입점문의 :
                            <span
                                style={{
                                    marginLeft: "3px",
                                    color: "rgb(95, 0, 128)",
                                }}
                            >
                                입점문의하기
                            </span>
                            <InfoSpan></InfoSpan> 제휴문의 :
                            <span
                                style={{
                                    marginLeft: "3px",
                                    color: "rgb(95, 0, 128)",
                                }}
                            >
                                business@kurlycorp.com
                            </span>
                            <br />
                            채용문의 :
                            <span
                                style={{
                                    marginLeft: "3px",
                                    color: "rgb(95, 0, 128)",
                                }}
                            >
                                recruit@kurlycorp.com
                            </span>
                            <br />
                            팩스: 070 - 7500 - 6098
                        </CommonInfoWrapper>
                        <ShareWrapper>
                            <Ins src="https://res.kurly.com/pc/ico/1810/ico_instagram.png"></Ins>
                            <Face src="https://res.kurly.com/pc/ico/1810/ico_fb.png"></Face>
                            <Line src="https://res.kurly.com/pc/ico/1810/ico_blog.png"></Line>
                            <Blog src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png"></Blog>
                            <Youtube src="https://res.kurly.com/pc/ico/1810/ico_youtube.png"></Youtube>
                        </ShareWrapper>
                    </CurlyInfo>
                </HelpWrapper>
                <CertificationInfo></CertificationInfo>
            </FooterWrapper>
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    padding-top: 29px;
    border-top: 1px solid rgb(247, 247, 247);
`;
const FooterWrapper = styled.div`
    width: 1050px;
    margin: 0px auto;
`;
const HelpWrapper = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    overflow: hidden;
    padding-bottom: 67px;
`;
const CSInfo = styled.div``;
const CertificationInfo = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 26px 0px 33px;
    border-top: 1px solid rgb(238, 238, 238);
`;
const CenterTitle = styled.h2`
    padding-bottom: 17px;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
`;
const CenterTime = styled.span`
    margin-left: 8px;
    font-weight: normal;
    font-size: 16px;
`;
const CenterNumber = styled.strong`
    display: block;
    padding-bottom: 20px;
    font-size: 28px;
    line-height: 40px;
`;
const ContactWrapper = styled.div`
    display: flex;
    margin-bottom: 38px;
`;
const QA = styled.button`
    display: block;
    width: 140px;
    height: 40px;
    border: 1px solid rgb(226, 226, 226);
    border-radius: 3px;
    line-height: 39px;
    text-align: center;
    background-color: transparent;
`;
const KaTalkQA = styled(QA)``;
const OneQA = styled(QA)``;
const BulkQA = styled(QA)``;
const EtcQA = styled.div`
    font-size: 12px;
    line-height: 18px;
    color: rgb(153, 153, 153);
`;
const CurlyInfo = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;
const NotificationWrapper = styled.ul`
    display: flex;
    width: 100%;
    padding-bottom: 29px;
`;
const List = styled.li`
    margin-left: 14px;
    font-size: 14px;
    line-height: 18px;
`;
const List1 = styled.li`
    margin-left: 0px;
    font-size: 14px;
    line-height: 18px;
`;
const List2 = styled(List)``;
const List3 = styled(List)``;
const List4 = styled(List)``;
const List5 = styled(List)``;
const List6 = styled(List)``;
const CommonInfoWrapper = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: rgb(153, 153, 153);
`;
const InfoSpan = styled.span`
    padding-left: "4px";
    &::after {
        content: "|";
        padding-right: 4px;
        font-size: 10px;
        vertical-align: top;
    }
`;
const ShareWrapper = styled.ul`
    display: flex;
    padding-top: 28px;
`;
const Icon = styled.img`
    display: block;
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;
const Ins = styled(Icon)``;
const Face = styled(Icon)``;
const Line = styled(Icon)``;
const Blog = styled(Icon)``;
const Youtube = styled(Icon)``;
