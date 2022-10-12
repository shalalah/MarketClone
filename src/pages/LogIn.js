import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LogIn() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const [InputId, setInputId] = useState("");
    const [InputPw, setInputPw] = useState("");

    // Id & Pw 유효성 확인
    const [IdValid, setIdValid] = useState(false);
    const [PwValid, setPwValid] = useState(false);

    const handleId = (e) => {
        setInputId(e.target.value);
        setIdValid(true);
    };

    const handlePw = (e) => {
        setInputPw(e.target.value);
        setPwValid(true);
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
                        onChange={handlePw}
                    />
                </PutPw>
                <FindWrap>
                    <IdFind>아이디찾기</IdFind>
                    <PwFind>비밀번호 찾기</PwFind>
                </FindWrap>
                <LoginBtn>
                    <button
                        disabled={
                            InputId.length !== 0 && InputPw.length !== 0
                                ? false
                                : true
                        }
                        onClick={() => {
                            alert("로그인이 완료되었습니다");
                            navigate("/");
                        }}
                    >
                        로그인
                    </button>
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
    text-align: center;
`;
const PutId = styled.div`
    margin-top: 30px;
`;
const PutPw = styled.div``;
const FindWrap = styled.div`
    margin-top: 10px;
`;
const LoginBtn = styled.div`
    margin-bottom: 5px;
`;
const SignupBtn = styled.div`
    margin-bottom: 5px;
ㅊ`;
const IdFind = styled.button`
    border: none;
    background-color: none;
    margin-bottom: 10px;
`;
const PwFind = styled.button`
    border: none;
    background-color: none;
`;
