import React from "react";
import "../../css/productDetail.css";
import styled from "styled-components";

// import itemDetailImg from "../../assets/items/item1-detail-pic.jpeg";

export default function DetailInfos(props) {
    const id = props.id;
    const product = props.dummy.find((x) => x.id === id);

    return (
        <div className="detailInfos">
            <div className="item1-detail-info-container">
                <div className="detail-item1-description">
                    <div id="pic-wrap">
                        <div className="pic">
                            <img src={product.detail_img} alt="상품 디테일컷" />
                        </div>
                        <div className="pic-context">
                            <h3>{product.desc}</h3>
                            <p className="item1-pic-context">
                                {product.detail_info_context}
                            </p>
                        </div>
                    </div>
                </div>
                <GoodsPoint>
                    <GoodsTitle>
                        <span className="title-point">Kurly's Check Point</span>
                    </GoodsTitle>
                    <div className="point-context">
                        <img src={product.point_src} alt="check-point-pic" />
                    </div>
                </GoodsPoint>
                <DetailPictures>
                    <div id="detail-item-pics">
                        <img
                            style={{ width: "100%" }}
                            src={product.detail_pics}
                            alt="item-detail-pics"
                        />
                    </div>
                </DetailPictures>
                {/* 후기 컴포넌트 작업 */}
                <DetailReviews>
                    <div id="detail-item1-review">
                        <h2 className="review-title">PRODUCT REVIEW</h2>
                    </div>
                </DetailReviews>
                {/* 상품 Q&A 컴포넌트 작업 */}
                <DetailInquiries>
                    <div id="detail-item1-inquiry">
                        <h2 className="inquiry-title">PRODUCT Q&A</h2>
                    </div>
                </DetailInquiries>
            </div>
        </div>
    );
}
const GoodsPoint = styled.div`
    .point-context {
        margin-bottom: 170px;
    }
`;
const GoodsTitle = styled.h3`
    display: inline-block;
    position: relative;
    z-index: 10;
    font-size: 50px;
    width: 100%;
    margin-bottom: 70px;
    font-weight: 400;
    color: rgb(102, 102, 102);
    ::before {
        width: 1010px;
        content: " ";
        position: absolute;
        top: 28px;
        height: 1px;
        background: rgb(185, 185, 185);
    }
    .title-point {
        position: relative;
        z-index: 10;
        display: inline-block;
        margin-left: 260px;
        padding: 0px 15px;
        background: rgb(255, 255, 255);
        text-shadow: 2px 0px;
    }
`;
const DetailPictures = styled.div`
    position: relative;
    width: 1010px;
    #detail-item-pics {
        padding-top: 100px;
        width: 100%;
        margin: 0px auto;
    }
`;
const DetailReviews = styled.div`
    position: relative;
    width: 1010px;
    padding-top: 100px;
`;
const DetailInquiries = styled.div`
    position: relative;
    width: 1010px;
    padding-top: 100px;
    padding-bottom: 100px;
`;
