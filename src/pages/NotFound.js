import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {
    const location = useLocation();

    return (
        <NotFoundContainer>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </NotFoundContainer>
    );
}

const NotFoundContainer = styled.div`
    position: relative;
    width: 1050px;
    margin: 0 auto;
    padding-top: 30px;
`;
