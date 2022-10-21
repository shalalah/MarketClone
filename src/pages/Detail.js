import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import ProductDetail from "../component/detail/ProductDetail";
import MidNav from "../component/detail/MidNav";
import DetailInfos from "../component/detail/DetailInfos";

import { dummy } from "../dummy";
import { MDdummy } from "../RecommendDummy";

export default function Detail() {
    const { id } = useParams();
    // console.log(id);
    return (
        <DetailPage>
            <ProductDetailPage>
                {id < 100 ? (
                    <ProductDetail dummy={dummy} id={id} />
                ) : (
                    <ProductDetail dummy={MDdummy} id={id} />
                )}
                <MidNav />
                {id < 100 ? (
                    <DetailInfos dummy={dummy} id={id} />
                ) : (
                    <DetailInfos dummy={MDdummy} id={id} />
                )}
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
