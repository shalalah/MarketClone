import React, { useState } from "react";
import styled from "styled-components";
import { CategoryDummy } from "../categorydummy";
import "../css/choice.css";

import Item from "./Item";
import MDSwiper from "./MDSwiper";

export default function MdChoice(props) {
    const category = CategoryDummy;
    const [btnActive, setBtnActive] = useState("");

    const toggleActive = (e) => {
        setBtnActive((prev) => {
            // console.log(e.target.value);
            return e.target.value;
        });
    };

    return (
        <MdChoices>
            <div className="MdCategoryList">
                <MDCategory>
                    {category.map((item, index) => (
                        <button
                            key={item.id}
                            className={
                                item.id === btnActive
                                    ? "CatBtnSelect"
                                    : "CatBtn"
                            }
                            onClick={toggleActive}
                            value={index}
                        >
                            {item.title}
                        </button>
                    ))}
                </MDCategory>
            </div>
            {btnActive ? (
                <MDSwiper btnActive={btnActive} MDdummy={props.MDdummy} />
            ) : (
                <Item dummy={props.dummy} />
            )}
            <MoreList>
                <Cat1>생수·음료·우유·커피 전체보기</Cat1>
            </MoreList>
        </MdChoices>
    );
}
const MdChoices = styled.div`
    .MdCategoryList {
        width: 1050px;
        margin: 0px auto;
    }
`;
// const MdCategoryList = styled.div`
//     width: 1050px;
//     margin: 0px auto;
// `;
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
