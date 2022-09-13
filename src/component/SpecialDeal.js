import React, { Fragment } from "react";
import styled from "styled-components";

import Clock from "../assets/deal/clock_icon.png";
import Special1 from "../assets/deal/special_deal_1.jpeg";

export default function SpecialDeal() {
    return (
        <div className="SpecialDeal">
            <SpecialWrap>
                <DealInfoWrap>
                    <DealTitle>일일특가</DealTitle>
                    <DealSubTitle>24시간 한정 특가</DealSubTitle>
                    <Fragment>
                        <TimerWrap>
                            <ClockImg src={Clock} />
                            <Timer>06:39:07</Timer>
                        </TimerWrap>
                        <DealLate>망설이면 늦어요!</DealLate>
                    </Fragment>
                </DealInfoWrap>
                <DealImgWrap>
                    <DealImageContainer>
                        <DealImg src={Special1} alt="추석특가 이미지" />
                        <CouponBanner>
                            <Coupon>일일특가</Coupon>
                        </CouponBanner>
                    </DealImageContainer>
                    <DealImageInfo>
                        <DealDescription>
                            매일매일 색다르게 즐기는 견과
                        </DealDescription>
                        <DealName>
                            HBAF 매일 색다른 먼투썬 하루견과 4주 (20gx28봉)
                        </DealName>
                        <DealDetail1>
                            <DealSaleInfo1>
                                <DiscountRate>30%</DiscountRate>
                                <SalesPrice>16,030원</SalesPrice>
                            </DealSaleInfo1>
                            <DimmedPrice>22,900원</DimmedPrice>
                        </DealDetail1>
                    </DealImageInfo>
                </DealImgWrap>
            </SpecialWrap>
        </div>
    );
}
const SpecialWrap = styled.div`
    width: 1050px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    padding: 80px 0px;
`;
const DealInfoWrap = styled.div`
    width: 249px;
`;
const DealTitle = styled.h2`
    font-size: 28px;
    color: rgb(51, 51, 51);
    font-weight: 500;
    line-height: 1.1;
    margin-bottom: 10px;
`;
const DealSubTitle = styled.h3`
    font-size: 16px;
    color: rgb(153, 153, 153);
    font-weight: normal;
    line-height: 1.3;
    letter-spacing: normal;
    margin-bottom: 24px;
`;
const TimerWrap = styled.div`
    display: flex;
`;
const ClockImg = styled.img`
    margin-right: 5px;
    width: 30px;
    height: 30px;
`;
const Timer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 136px;
    font-size: 32px;
    font-weight: 800;
    color: rgb(51, 51, 51);
`;
const DealLate = styled.p`
    font-size: 14px;
    color: rgb(204, 204, 204);
    font-weight: normal;
    line-height: 1.43;
    letter-spacing: -0.4px;
    margin-top: 32px;
`;
const DealImgWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 694px;
`;
const DealImageContainer = styled.div`
    height: 347px;
    overflow: hidden;
    position: relative;
`;
const DealImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    &:hover {
        transform: scale(1.02);
        transition: 0.3s;
    }
`;
const CouponBanner = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    left: 0px;
    top: 0px;
    opacity: 0.9;
    padding: 0px 8px;
    height: 32px;
    background-color: rgb(189, 118, 255);
`;
const Coupon = styled.span`
    font-size: 14px;
    line-height: 1.43px;
    font-weight: bold;
    color: rgb(255, 255, 255);
`;
const DealImageInfo = styled.div`
    padding: 14px 0px 0px;
`;
const DealDescription = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: rgb(153, 153, 153);
    margin-bottom: 8px;
    line-height: 1.38;
    word-break: break-word;
`;
const DealName = styled.h3`
    font-size: 16px;
    line-height: 1.45;
    color: rgb(51, 51, 51);
    font-weight: 400;
    margin-bottom: 6px;
`;
const DealDetail1 = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 0px 0px;
`;
const DealSaleInfo1 = styled.div`
    flex-direction: row;
    align-items: center;
    font-weight: 800;
    line-height: 1.5;
    font-size: 20px;
`;
const DiscountRate = styled.span`
    color: rgb(250, 98, 47);
    margin-right: 5px;
`;
const SalesPrice = styled.span`
    color: rgb(51, 51, 51);
    font-size: 20px;
`;
const DimmedPrice = styled.span`
    margin-left: 6px;
    color: rgb(181, 181, 181);
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    text-decoration: line-through;
`;
