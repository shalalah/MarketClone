import React, { useState } from "react";
import styled from "styled-components";
import { categorydummy } from "../categorydummy";
import "../css/choice.css";

export default function MdChoice() {
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
                                index == btnActive
                                    ? "CatBtnSelect"
                                    : "btnActive"
                            }
                            onClick={toggleActive}
                            value={index}
                        >
                            {item.title}
                        </button>
                    ))}
                </MDCategory>
            </MdCategoryList>
            <MDItemsContainer></MDItemsContainer>
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
const MDItemsContainer = styled.div`
    width: 1050px;
    margin: 0px auto;
    margin-left: auto;
`;
