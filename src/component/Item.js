import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import styled from "styled-components";
import "../css/item.css";
import BasketIcon from "../assets/items/basket_icon.svg";

import { Navigation } from "swiper";

import { dummy } from "../dummy";

export default function Item() {
    return (
        <RecommendItem>
            <div className="recommend_list">
                <div className="recommend_title">
                    <div className="product_Q">
                        <span className="product_q">이 상품 어때요?</span>
                    </div>
                </div>
                <div className="recommend_items">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        slidesPerGroup={4}
                        loop={false}
                        loopFillGroupWithBlank={true}
                        navigation={{
                            clickable: true,
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        modules={[Navigation]}
                        className="swiper-container"
                    >
                        <div className="swiper-wrapper">
                            {dummy.map((item, index) => (
                                <SwiperSlide key={item.id}>
                                    <Link to="/Detail">
                                        <ItemImg1>
                                            <img
                                                src={item.src}
                                                alt={item.alt}
                                                style={{
                                                    height: "320px",
                                                    width: "249px",
                                                }}
                                            />
                                            <AddBasket>
                                                <img
                                                    src={BasketIcon}
                                                    alt="장바구니 추가"
                                                />
                                            </AddBasket>
                                        </ItemImg1>
                                    </Link>
                                    <ItemInfo>
                                        {item.title}
                                        <InfoDetail>
                                            <ProductPrice>
                                                <Discount>
                                                    <span>{item.discount}</span>
                                                </Discount>
                                                <SalePrice>
                                                    {item.sale_price}
                                                </SalePrice>
                                            </ProductPrice>
                                        </InfoDetail>
                                    </ItemInfo>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                    <button className="swiper-button-next"></button>
                    <button className="swiper-button-prev"></button>
                </div>
            </div>
        </RecommendItem>
    );
}
const RecommendItem = styled.div``;
const ItemImg1 = styled.div`
    display: flex;
    position: relative;
    width: 265px;
`;

const AddBasket = styled.button`
    position: absolute;
    bottom: 5px;
    right: 8px;
    background-color: transparent;
    border: none;
`;
const ItemInfo = styled.div`
    position: relative;
    padding: 14px 10px 0px 0px;
    margin-bottom: 8px;
`;
const InfoDetail = styled.div`
    display: flex;
    margin-top: 5px;
`;
const ProductPrice = styled.div`
    display: flex;
`;
const Discount = styled.div`
    color: red;
    margin-right: 7px;
    font-size: 16px;
    font-weight: 800;
    line-height: 1.5;
`;
const SalePrice = styled.div`
    color: black;
    font-size: 16px;
    font-weight: 800;
    line-height: 1.5;
`;
