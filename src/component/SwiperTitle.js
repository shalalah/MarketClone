import React from "react";
import styled from "styled-components";

export default function SwiperTitle() {
    return (
        <SwiperTitleWrap>
            <RecommendTitle>
                <RecommendQ>
                    <ProductQ>이 상품 어때요?</ProductQ>
                </RecommendQ>
            </RecommendTitle>
        </SwiperTitleWrap>
    );
}
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
