import React from "react";
import styled from "styled-components";
import ProductDetail from "../component/ProductDetail";
import { dummy } from "../dummy";

export default function Detail() {
    return (
        <DetailPage>
            상세페이지
            <ProductDetailPage>
                <ProductDetail dummy={dummy} />
            </ProductDetailPage>
        </DetailPage>
    );
}

const DetailPage = styled.div`
    position: relative;
    width: 100%;
`;
const ProductDetailPage = styled.div`
    position: relative;
    width: 1050px;
    margin: 0 auto;
    padding-top: 30px;
`;
