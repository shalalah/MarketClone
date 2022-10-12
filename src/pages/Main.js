// import React, { useEffect } from "react";
import styled from "styled-components";
import Item from "../component/Item";
import MainTopBanner from "../component/MainTopBanner";
import SpecialDeal from "../component/SpecialDeal";
import MdChoice from "../component/MdChoice";
import FreqItems from "../component/FreqItems";
import LineBanner1 from "../assets/banner/line_banner_1.jpeg";

import { dummy } from "../dummy";
import { MDdummy } from "../RecommendDummy";

export default function Main() {
    return (
        <div className="Main-container">
            <MainTopBanner />
            <SwiperTitleWrap>
                <div className="RecommendTitle">
                    <RecommendQ>
                        <span className="ProductQ">이 상품 어때요?</span>
                    </RecommendQ>
                </div>
            </SwiperTitleWrap>
            <Item dummy={dummy} />
            <LineBanner>
                <LineBannerImg src={LineBanner1} />
            </LineBanner>
            <SpecialDeal />
            <SwiperTitleWrap>
                <div className="RecommendTitle">
                    <RecommendQ>
                        <span className="ProductQ">냉장고 속 단골 재료</span>
                    </RecommendQ>
                    <SubQ>평일 냉장고를 부탁해</SubQ>
                </div>
            </SwiperTitleWrap>
            <FreqItems dummy={dummy} />
            <SwiperTitleWrap>
                <div className="RecommendTitle">
                    <RecommendQ>
                        <span className="ProductQ">MD의 추천</span>
                    </RecommendQ>
                </div>
            </SwiperTitleWrap>
            <MdChoice dummy={dummy} MDdummy={MDdummy} />
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
    .RecommendTitle {
        margin-bottom: 27px;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
    }
`;
const RecommendQ = styled.div`
    position: relative;
    display: flex;
    padding: 8px 0px 8px 8px;
    .ProductQ {
        color: rgb(51, 51, 51);
        font-size: 28px;
        line-height: 1.15;
        font-weight: 500;
    }
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
