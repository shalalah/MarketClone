import React, { useState } from "react";
import styled from "styled-components";
import { categorydummy } from "../categorydummy";
import "../css/choice.css";

import Item from "./Item";
import MDSwiper from "./MDSwiper";

export default function MdChoice(props) {
    const [btnActive, setBtnActive] = useState("");

    const toggleActive = (e) => {
        setBtnActive((prev) => {
            return e.target.value;
        });
    };

    return (
        <MdChoices>
            <MdCategoryList>
                <MDCategory>
                    {categorydummy.map((item, index) => (
                        <button
                            key={item.id}
                            className={
                                index == btnActive ? "CatBtnSelect" : "CatBtn"
                            }
                            onClick={toggleActive}
                            value={index}
                        >
                            {item.title}
                        </button>
                    ))}
                </MDCategory>
            </MdCategoryList>
            {btnActive ? <MDSwiper /> : <Item dummy={props.dummy} />}
            <MoreList>
                <Cat1>생수·음료·우유·커피 전체보기</Cat1>
            </MoreList>
        </MdChoices>
    );
}
const MdChoices = styled.div``;
const MdCategoryList = styled.div`
    width: 1050px;
    margin: 0px auto;
`;
const MDCategory = styled.div`
    display: flex;
    flex-wrap: wrap;
    place-content: center;
`;
const MoreList = styled.div`
    margin: 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 516px;
    height: 56px;
    border-radius: 3px;
    border: 1px solid rgb(227, 227, 227);
    cursor: pointer;
`;
const Cat1 = styled.span`
    padding: 0px 17px;
    background-size: 18px 18px;
    font-size: 16px;
    letter-spacing: -0.27px;
    line-height: 15px;
`;
