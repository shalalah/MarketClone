import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// import { MDdummy } from "../RecommendDummy";
import styled from "styled-components";
import "../css/item.css";
import BasketIcon from "../assets/items/basket_icon.svg";

export default function MDSwiper(props) {
    const navigate = useNavigate();

    const MDdummy = props.MDdummy;
    // console.log(props.btnActive);

    return (
        <MDChoiceSwiper>
            <div className="recommend_items">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    slidesPerGroup={4}
                    loop={false}
                    loopFillGroupWithBlank={true}
                    navigation={{
                        clickable: true,
                        nextEl: ".swiper-MDbutton-next",
                        prevEl: ".swiper-MDbutton-prev",
                    }}
                    modules={[Navigation]}
                    className="swiper-container"
                >
                    <div className="swiper-wrapper">
                        {MDdummy.map((item, index) => (
                            <SwiperSlide key={item.id}>
                                <ItemContainer>
                                    <ItemImg1
                                        src={item.src}
                                        alt={item.alt}
                                        onClick={() => {
                                            navigate(`/Detail/${item.id}`);
                                        }}
                                    />
                                    <AddBasket>
                                        <img
                                            src={BasketIcon}
                                            alt="장바구니 추가"
                                            onClick={() => {
                                                alert("장바구니");
                                            }}
                                        />
                                    </AddBasket>
                                </ItemContainer>
                                <ItemInfo>
                                    <ItemName>{item.title}</ItemName>
                                    <InfoDetail>
                                        <ProductPrice>
                                            <Discount>{item.discount}</Discount>
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
                <button className="swiper-MDbutton-next"></button>
                <button className="swiper-MDbutton-prev"></button>
            </div>
        </MDChoiceSwiper>
    );
}
const MDChoiceSwiper = styled.div`
    width: 1050px;
    margin: 0px auto;
    margin-left: auto;
`;
const ItemContainer = styled.div`
    display: flex;
    position: relative;
    width: 249px;
    height: 320px;
`;
const ItemImg1 = styled.img`
    height: 320px;
    width: 249px;
    cursor: pointer;
    &:hover {
        transform: scale(1.02);
        transition: 0.3s;
    }
`;

const AddBasket = styled.button`
    position: absolute;
    bottom: 5px;
    right: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;
const ItemInfo = styled.div`
    position: relative;
    width: 249px;
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
const Discount = styled.span`
    color: red;
    margin-right: 4px;
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
const ItemName = styled.h3`
    font-size: 16px;
    line-height: 1.45;
    font-weight: 400;
`;
