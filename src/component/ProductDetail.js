import React from "react";
import styled from "styled-components";

export default function ProductDetail(props) {
    console.log(props.dummy);
    return (
        <ProductDetail1>
            제품상세내용
            <DetailItemImg>
                {/* <img src={props.dummy.src} alt={props.dummy.alt} /> */}
            </DetailItemImg>
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
