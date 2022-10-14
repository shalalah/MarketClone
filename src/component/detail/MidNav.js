import React from "react";
import { Link } from "react-router-dom";
import "../../css/productDetail.css";

export default function MidNav() {
    return (
        <nav className="mid-nav">
            <div className="mid-nav-container">
                <div className="explain-wrap">
                    <Link className="explain">
                        <span>상품설명</span>
                    </Link>
                </div>
                <div className="more-detail-wrap">
                    <Link className="more-detail">
                        <span>상세정보</span>
                    </Link>
                </div>
                <div className="review-wrap">
                    <Link className="review">
                        <span>후기</span>
                        <span>(10)</span>
                    </Link>
                </div>
                <div className="qna-wrap">
                    <Link className="qna">
                        <span>문의</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
