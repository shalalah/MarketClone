import React from "react";
import styled from "styled-components";

export default function ProductDetail() {
    return (
        <ProductDetail1>
            <DetailItemImg></DetailItemImg>
            <DetailItemInfo></DetailItemInfo>
        </ProductDetail1>
    );
}

const ProductDetail1 = styled.div`
    display: flex;
    justify-content: space-between;
`;
const DetailItemImg = styled.img`
    width: 430px;
    height: 552px;
    background: url(./image/detail_page_img/detail_item_1.jpeg) 50% 50%
        no-repeat;
`;
const DetailItemInfo = styled.div`
    width: 560px;
`;
// const DetailItemInfo = styled.div``;
