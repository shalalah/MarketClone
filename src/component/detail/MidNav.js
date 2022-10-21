import React, { useEffect, useState } from "react";
import "../../css/productDetail.css";
// 스크롤 이동
import { Link } from "react-scroll";
import styled from "styled-components";

export default function MidNav() {
    const [click, setClick] = useState(0);
    const [prevClick, setPrevClick] = useState(0);

    const activeBtn = (i) => {
        // console.log(i);
        setClick(i);
    };
    useEffect(() => {
        // if (click !== 0) {
        //     console.log(click);
        // }
        setPrevClick(click);
    }, [click]);

    return (
        <MidNavContainer>
            <nav className="mid-nav-container">
                <ExplainWrapper>
                    <Link
                        className="explain"
                        to="pic-wrap"
                        spy={true}
                        smooth={true}
                        onClick={() => {
                            activeBtn(1);
                        }}
                    >
                        <span
                            className={`explain-name${
                                click !== 1 ? "" : "-active"
                            }`}
                        >
                            상품설명
                        </span>
                    </Link>
                </ExplainWrapper>
                <ExplainWrapper>
                    <Link
                        className="explain"
                        to="detail-item-pics"
                        spy={true}
                        smooth={true}
                        onClick={() => {
                            activeBtn(2);
                        }}
                    >
                        <span
                            className={`explain-name${
                                click !== 2 ? "" : "-active"
                            }`}
                        >
                            상세정보
                        </span>
                    </Link>
                </ExplainWrapper>
                <ExplainWrapper>
                    <Link
                        className="explain"
                        to="detail-item1-review"
                        spy={true}
                        smooth={true}
                        onClick={() => {
                            activeBtn(3);
                        }}
                    >
                        <span
                            className={`explain-name${
                                click !== 3 ? "" : "-active"
                            }`}
                        >
                            후기(10)
                        </span>
                    </Link>
                </ExplainWrapper>
                <ExplainWrapper>
                    <Link
                        className="explain"
                        to="detail-item1-inquiry"
                        spy={true}
                        smooth={true}
                        onClick={() => {
                            activeBtn(4);
                        }}
                    >
                        <span
                            className={`explain-name${
                                click !== 4 ? "" : "-active"
                            }`}
                        >
                            문의
                        </span>
                    </Link>
                </ExplainWrapper>
            </nav>
        </MidNavContainer>
    );
}
const MidNavContainer = styled.div`
    z-index: 20;
    position: sticky;
    top: 56px;
    width: 1010px;
    box-shadow: rgb(221 221 221) 0px -0.5px 0px 0px inset;
    background-color: rgb(255, 255, 255);
    margin-top: 50px;
    .mid-nav-container {
        display: flex;
        flex-wrap: wrap;
        height: 60px;
        background-color: rgb(250, 250, 250);
    }
`;
const ExplainWrapper = styled.div`
    display: flex;
    flex: 1 1 0%;
    border-width: 1px 0px 1px 1px;
    background-color: rgb(250, 250, 250);
    border-color: rgb(238, 238, 238);
    border-style: solid;
    .explain {
        display: flex;
        flex: 1 1 0%;
        justify-content: center;
        align-items: center;
        height: 100%;
        text-decoration: none;
        cursor: pointer;
        &:hover {
            background-color: rgb(255, 255, 255);
            color: rgb(95, 0, 128);
        }
        .explain-name {
            font-size: 16px;
            font-weight: 500;
            color: rgb(102, 102, 102);
        }
        .explain-name-active {
            color: rgb(95, 0, 128);
        }
    }
`;
