import React, { useState } from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import Logo from "../assets/Header/logo.svg";
import LogoNew from "../assets/Header/logo_new.svg";
import FindIcon from "../assets/Header/find_icon.svg";
import Site from "../assets/Header/site_icon.svg";
import BasketIcon from "../assets/Header/bascket_icon.svg";
import LikeIcon from "../assets/Header/like_icon.svg";

import "../css/header.css";

import { useDispatch } from "react-redux";
import { LogoutFB } from "../modules/user";

export default function Header({ is_login, nick }) {
    const dispatch = useDispatch();

    const [keyword, setKeyword] = useState("");

    // console.log(is_login);

    return (
        <div className="Header">
            {is_login ? null : (
                <div className="small_pop_up">
                    지금 가입하고 인기상품 100원에 받아가세요
                </div>
            )}
            <div className="header-container">
                <div className="header_wrap">
                    <div className="sign_wrap">
                        {is_login ? (
                            <button
                                className="logout"
                                onClick={() => {
                                    dispatch(LogoutFB());
                                }}
                            >
                                {nick}님, 로그아웃
                            </button>
                        ) : (
                            <div>
                                <Link to="/SignUp" className="sign_up_">
                                    회원가입
                                </Link>
                                <Link to="/LogIn" className="login">
                                    로그인
                                </Link>
                            </div>
                        )}
                        <div className="center">
                            <Link to="/Question" className="question">
                                고객센터
                            </Link>
                            <span className="moreBtn"></span>
                        </div>
                    </div>
                    <div className="logo_wrap">
                        <div className="logo_image">
                            <Link to="/">
                                <img src={Logo} alt="컬리 로고" />
                            </Link>
                        </div>
                        <div className="logo_fonts">
                            <button className="font_btn1">마켓컬리</button>
                            <button className="font_btn2">뷰티컬리</button>
                            <div className="new_img">
                                <img src={LogoNew} alt="new" />
                            </div>
                        </div>
                    </div>
                    <div className="search_wrap">
                        <div className="find_input">
                            <input
                                placeholder="검색어를 입력해주세요"
                                value={keyword}
                                onChange={(e) => {
                                    setKeyword(e.target.value);
                                }}
                            />
                        </div>
                        <div className="find_icon">
                            <img src={FindIcon} alt="찾기 아이콘" />
                        </div>
                    </div>
                    <div className="icons_wrap">
                        <div className="icon">
                            <img src={Site} alt="배송지 찾기" />
                        </div>
                        <div className="icon">
                            <img src={LikeIcon} alt="찜하기" />
                        </div>
                        <div className="icon">
                            <img src={BasketIcon} alt="장바구니" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
