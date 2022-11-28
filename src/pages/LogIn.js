import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../component/LoginForm";

export default function LogIn({ is_login }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (is_login === true) {
            navigate("/");
        }
    }, [is_login]);

    return (
        <LogInContainer>
            <Title>로그인</Title>
            <LoginForm />
        </LogInContainer>
    );
}
const LogInContainer = styled.div`
    min-width: 1050px;
    margin-top: 90px;
    margin-bottom: 60px;
    background-color: rgb(255, 255, 255);
    .PutId,
    .PutPw {
        margin: 0 auto;
        display: flex;
        width: 500px;
        height: 48px;
        padding: 10px 20px;
    }
    p {
        text-align: start;
        color: #bf1650;
        padding-left: 200px;
    }
    p::before {
        display: inline;
        content: "⚠ ";
    }
`;
const Title = styled.div`
    margin-bottom: 30px;
    font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
`;
