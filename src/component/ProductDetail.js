import React from "react";
import styled from "styled-components";

export default function ProductDetail(props) {
    console.log(props.dummy);
    return (
        <ProductDetail1>
            <YBtn bg="blue">버튼</YBtn>
            <YBtn bg="yellow">버튼</YBtn>
            <DetailItemImg>
                {/* <img src={props.dummy.src} alt={props.dummy.alt} /> */}
            </DetailItemImg>
            <DetailItemInfo></DetailItemInfo>
        </ProductDetail1>
    );
}
const YBtn = styled.button`
    background: ${(props) => props.bg};
    color: ${(props) => (props.bg === "blue" ? "white" : "pink")};
    padding: 5px;
    height: 30px;
    width: 50px;
`;
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
