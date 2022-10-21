import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../../css/productDetail.css";
import questionIcon from "../../assets/icons/quest_icon.svg";
import purpleIcon from "../../assets/icons/like_purple_icon.svg";
import alarmIcon from "../../assets/icons/alarm_icon.svg";

export default function ProductDetail(props) {
    // console.log(props.dummy);
    const id = props.id;
    const product = props.dummy.find((x) => x.id === id);

    //원가 계산
    let sale_price = parseInt(product.sale_price);
    let cost = sale_price / ((100 - parseInt(product.discount)) * 0.01);
    // console.log(cost);

    // 수량 계산
    let [count, setCount] = useState(0);
    // 수량에 따른 상품 총 가격 계산
    let totalPrice = sale_price * count;
    // console.log(totalPrice);
    let [onDisabled, setOnDisabled] = useState(true);
    useEffect(() => {
        if (count < 2) {
            setOnDisabled(true);
        }
    }, [count]);

    return (
        <ProductDetails>
            <DetailItemImg src={product.src} alt={product.alt}></DetailItemImg>
            <DetailItemInfo>
                <div className="early-delivery">샛별배송</div>
                <DetailTitleWrapper>
                    <div className="detail-item1-name">
                        <h2 className="item1-name">{product.title}</h2>
                        <button className="share"></button>
                    </div>
                    <span className="detail-item1-desc">{product.desc}</span>
                </DetailTitleWrapper>
                <DetailSaleWrapper>
                    <div className="detail-sale-info">
                        <span className="discount-rate">
                            {product.discount}
                        </span>
                        <span className="sales-price">
                            {sale_price.toLocaleString()}
                        </span>
                        <span className="sales-price-unit">원</span>
                    </div>
                    <div className="dimmed-price-wrap">
                        <span className="dimmed-price">
                            {cost.toLocaleString()}원
                        </span>
                        {/* 로그인시 안보이게 조건문 */}
                        <img alt="?" src={questionIcon} />
                    </div>
                    <div className="login-price-notice">
                        {/* 로그인시 안보이게 조건문 */}
                        <span className="detail-price-notice">
                            로그인 후,할인 및 적립 혜택이 제공됩니다.
                        </span>
                    </div>
                </DetailSaleWrapper>
                {/* 상품관련 주요사항 요약 테이블 */}
                <DetailInfoWrapper>
                    <dl className="detail-info-container">
                        <dt className="detail-info-title">배송</dt>
                        <dd className="detail-info-wrap">
                            <p className="detail-info-name">
                                {product.express1}
                            </p>
                            <p className="detail-info-desc">
                                {product.express2}
                            </p>
                        </dd>
                    </dl>
                    <dl className="detail-info-container">
                        <dt className="detail-info-title">판매자</dt>
                        <dd className="detail-info-wrap">
                            <p className="detail-info-name">{product.seller}</p>
                        </dd>
                    </dl>
                    <dl className="detail-info-container">
                        <dt className="detail-info-title">포장타입</dt>
                        <dd className="detail-info-wrap">
                            <p className="detail-info-name">
                                {product.package_type}
                            </p>
                            <p className="detail-info-desc">
                                택배배송은 에코 포장이 스티로폼으로 대체됩니다.
                            </p>
                        </dd>
                    </dl>
                    <dl className="detail-info-container">
                        <dt className="detail-info-title">판매단위</dt>
                        <dd className="detail-info-wrap">
                            <p className="detail-info-name">
                                {product.package_unit}
                            </p>
                        </dd>
                    </dl>
                    <dl className="detail-info-container">
                        <dt className="detail-info-title">중량/용량</dt>
                        <dd className="detail-info-wrap">
                            <p className="detail-info-name">
                                상세페이지 별도표기
                            </p>
                        </dd>
                    </dl>
                    <dl className="detail-info-container">
                        <dt className="detail-info-title">알레르기정보</dt>
                        <dd className="detail-info-wrap">
                            <p className="detail-info-name">
                                {product.allergy}
                            </p>
                        </dd>
                    </dl>
                </DetailInfoWrapper>
                <ItemSelect>
                    <dl className="detail-info-container">
                        <dt className="detail-info-title">상품선택</dt>
                        <div className="item1-select1">
                            <div className="select1-item">
                                <span className="select-item-name">
                                    {product.title}
                                </span>
                            </div>
                            <div className="select1_number">
                                <div className="select1-item-num">
                                    <div className="select-total-option">
                                        <button
                                            className="option-pre-btn"
                                            disabled={onDisabled}
                                            onClick={() => {
                                                setCount(count - 1);
                                            }}
                                        >
                                            -
                                        </button>
                                        <div className="option-count">
                                            {count}
                                        </div>
                                        <button
                                            className="option-post-btn"
                                            onClick={() => {
                                                setCount(count + 1);
                                                setOnDisabled(false);
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div>
                                        <span className="select-total-cost">
                                            {totalPrice.toLocaleString()}원
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dl>
                    <div className="item1-price-info">
                        <div className="select1-price">
                            <div className="total-price">
                                <span className="price-title">
                                    총 상품금액 :
                                </span>
                                <span className="price">
                                    {totalPrice.toLocaleString()}
                                </span>
                                <span className="price-unit">원</span>
                            </div>
                            <div className="point-info">
                                <span className="point-highlight">적립</span>
                                <span className="point-notice">
                                    로그인 후, 할인 및 적립 혜택 제공
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="icons-wrap">
                        <button className="like-button">
                            <img src={purpleIcon} alt="좋아요" />
                        </button>
                        <button className="alarm-button">
                            <img src={alarmIcon} alt="알림" />
                        </button>
                        <div className="cart-btn-wrap">
                            <button className="cart-btn">
                                <span className="cart">장바구니 담기</span>
                            </button>
                        </div>
                    </div>
                </ItemSelect>
            </DetailItemInfo>
        </ProductDetails>
    );
}
const ProductDetails = styled.div`
    display: flex;
    justify-content: space-between;
`;
const DetailItemImg = styled.img`
    width: 430px;
    height: 552px;
`;
const DetailItemInfo = styled.div`
    width: 560px;
    .early-delivery {
        font-weight: 500;
        line-height: 1.36;
        letter-spacing: -0.5px;
        color: rgb(153, 153, 153);
        margin-bottom: 6px;
        width: 500px;
    }
`;
const DetailTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const DetailSaleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 19px
    font-weight: bold;
    line-height: 30px;
    letter-spacing: -0.5px;
`;
const DetailInfoWrapper = styled.div`
    margin-top: 20px;
`;

const ItemSelect = styled.div`
    padding-bottom: 40px;
    .detail-info-container {
        border-bottom: 1px solid rgb(244, 244, 244);
    }
`;
