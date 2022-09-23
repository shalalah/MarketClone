import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function LogIn() {
    const [InputId, setInputId] = useState("");
    const [InputPw, setInputPw] = useState("");
    const [Allow, setAllow] = useState(false);

    const handleId = (e) => {
        setInputId(e.target.value);
    };

    useEffect(() => {}, [InputId, InputPw]);
    return (
        <LogInContainer>
            <Title>로그인</Title>
            <LogInWrapper>
                <PutId>
                    <input
                        type="text"
                        placeholder="아이디를 입력해주세요"
                        value={InputId}
                        onChange={handleId}
                    />
                </PutId>
                <PutPw>
                    <input
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        value={InputPw}
                        onChange={(e) => {
                            setInputPw(e.target.value);
                        }}
                    />
                </PutPw>
                <FindWrap>
                    <button>아이디찾기</button>
                    <button>비밀번호 찾기</button>
                </FindWrap>
                <LoginBtn>
                    <button disabled={Allow}>로그인</button>
                </LoginBtn>
                <SignupBtn>
                    <button>회원가입</button>
                </SignupBtn>
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
const PutId = styled.div``;
const PutPw = styled.div``;
const FindWrap = styled.div``;
const LoginBtn = styled.div``;
const SignupBtn = styled.div``;
