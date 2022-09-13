import React from "react";
import styled from "styled-components";
// import SwiperTitle from "../component/SwiperTitle";
import Item from "../component/Item";
import MainTopBanner from "../component/MainTopBanner";
import SpecialDeal from "../component/SpecialDeal";
import MdChoice from "../component/MdChoice";
import LineBanner1 from "../assets/banner/line_banner_1.jpeg";

export default function Main() {
    return (
        <div className="Main-container">
            <MainTopBanner />
            <SwiperTitleWrap>
                <RecommendTitle>
                    <RecommendQ>
                        <ProductQ>이 상품 어때요?</ProductQ>
                    </RecommendQ>
                </RecommendTitle>
            </SwiperTitleWrap>
            <Item />
            <LineBanner>
                <LineBannerImg src={LineBanner1} />
            </LineBanner>
            <SpecialDeal />
            <SwiperTitleWrap>
                <RecommendTitle>
                    <RecommendQ>
                        <ProductQ>냉장고 속 단골 재료</ProductQ>
                    </RecommendQ>
                    <SubQ>평일 냉장고를 부탁해</SubQ>
                </RecommendTitle>
            </SwiperTitleWrap>
            <Item />
            <SwiperTitleWrap>
                <RecommendTitle>
                    <RecommendQ>
                        <ProductQ>MD의 추천</ProductQ>
                    </RecommendQ>
                </RecommendTitle>
            </SwiperTitleWrap>
            <MdChoice />
        </div>
    );
}
const LineBanner = styled.div`
    width: 1050px;
    margin: 0px auto;
    padding: 40px 0px;
`;
const LineBannerImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const SwiperTitleWrap = styled.div`
    padding-top: 40px;
    margin-bottom: 27px;
`;
const RecommendTitle = styled.div`
    margin-bottom: 27px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`;
const RecommendQ = styled.div`
    position: relative;
    display: flex;
    padding: 8px 0px 8px 8px;
`;
const ProductQ = styled.span`
    color: rgb(51, 51, 51);
    font-size: 28px;
    line-height: 1.15;
    font-weight: 500;
`;
const SubQ = styled.p`
    font-size: 16px;
    font-weight: normal;
    line-height: 1.45;
    letter-spacing: -0.2px;
    text-align: center;
    color: rgb(153, 153, 153);
    margin-top: 2px;
`;
