import React, { useState } from "react";
import styled from "styled-components";

export default function LogIn() {
    const [InputId, setInputId] = useState("");
    const [InputPw, setInputPw] = useState("");

    return (
        <LogInContainer>
            <Title>로그인</Title>
            <LogInWrapper>
                <>
                    <input placeholder="아이디를 입력해주세요" />
                </>
                <>
                    <input placeholder="비밀번호를 입력해주세요" />
                </>
                <>
                    <button>아이디찾기</button>
                    <button>비밀번호 찾기</button>
                </>
                <>
                    <button>로그인</button>
                </>
                <>
                    <button>회원가입</button>
                </>
            </LogInWrapper>
        </LogInContainer>
    );
}
const LogInContainer = styled.div`
    min-width: 1050px;
    margin-top: 90px;
    margin-bottom: 60px;
    background-color: rgb(255, 255, 255);
`;
const Title = styled.div`
    font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
`;
const LogInWrapper = styled.div`
    margin: 0 auto;
    width: 340px;
`;
