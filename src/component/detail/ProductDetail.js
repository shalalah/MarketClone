import React from "react";
import styled from "styled-components";

export default function ProductDetail(props) {
    // console.log(props.dummy);
    const id = props.id;
    const product = props.dummy.find((x) => x.id === id);

    return (
        <ProductDetail1>
            <DetailItemImg src={product.src} alt={product.alt}></DetailItemImg>
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
`;
const DetailItemInfo = styled.div`
    width: 560px;
`;

// const DetailItemInfo = styled.div``;
