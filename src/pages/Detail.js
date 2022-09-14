import React from "react";
import styled from "styled-components";
import ProductDetail from "../component/ProductDetail";

export default function Detail() {
    return (
        <DetailPage>
            <ProductDetail />
        </DetailPage>
    );
}

const DetailPage = styled.div`
    position: relative;
    width: 100%;
`;
