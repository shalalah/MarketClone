import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import BasketIcon from "../assets/items/basket_icon.svg";

export default function Item({img,alt,title,sale_price,discount}) {
    return (
        <Item1>
            <ItemImg1>
            <Link to="/Detail">
                <img src={img} alt={alt} style={{height: "320px"}}/>
            </Link>
            <AddBasket>
                <img src={BasketIcon} alt="장바구니 추가" />
            </AddBasket>
            </ItemImg1>
            <ItemInfo>
                {title}
                <InfoDetail>
                    <ProductPrice>
                        <Discount><span>{discount}</span></Discount>
                        <SalePrice>{sale_price}</SalePrice>
                    </ProductPrice>
                </InfoDetail>
            </ItemInfo>
        </Item1>
    );
};
const Item1 = styled.div`
width: 249px;
cursor: pointer;
`

const ItemImg1 = styled.div`
    display: flex;
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