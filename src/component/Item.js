import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {Link} from "react-router-dom";
import styled from "styled-components";
import '../css/item.css';
import BasketIcon from "../assets/items/basket_icon.svg";

import { dummy } from '../dummy';

export default function Item() {
    return (
            <RecommendItems>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                slidesPerGroup={4}
                loop={false}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[ Navigation ]}
                className="swiper-container1"
                >
            <div className='swiper-wrapper1'>
                {dummy.map((item,index) => (
                <SwiperSlide>
                <Item1>
                    <ItemImg1>
                    <Link to="/Detail">
                        <img src={item.src} alt={item.alt} style={{height: "320px"}}/>
                    </Link>
                    <AddBasket>
                        <img src={BasketIcon} alt="장바구니 추가" />
                    </AddBasket>
                    </ItemImg1>
                    <ItemInfo>
                        {item.title}
                        <InfoDetail>
                            <ProductPrice>
                                <Discount><span>{item.discount}</span></Discount>
                                <SalePrice>{item.sale_price}</SalePrice>
                            </ProductPrice>
                        </InfoDetail>
                    </ItemInfo>
                </Item1>
                </SwiperSlide>
                ))}
            </div>
            </Swiper>
            </RecommendItems>
    );
};

const RecommendItems = styled.div`
    width: 1050px;
    margin: 0px auto;
    margin-left: auto;
    overflow: hidden;
`
const Item1 = styled.div`
    width: 265px;
    cursor: pointer;
`
const ItemImg1 = styled.div`
    display: flex;
    width: 249px;
    height: 320px;
    position: relative;
`
const AddBasket = styled.button`
    position: absolute;
    bottom: 5px;
    right: 8px;
    background-color: transparent;
    border: none;
`
const ItemInfo = styled.div`
    position: relative;
    padding: 14px 10px 0px 0px;
    margin-bottom: 8px;
`
const InfoDetail = styled.div`
    display: flex;
    margin-top: 5px;
`
const ProductPrice = styled.div`
    display: flex;  
`
const Discount = styled.div`
    color: red;
    margin-right: 7px;
    font-size: 16px;
    font-weight: 800;
    line-height: 1.5;
`
const SalePrice = styled.div`
    color: black;
    font-size: 16px;
    font-weight: 800;
    line-height: 1.5;
`
