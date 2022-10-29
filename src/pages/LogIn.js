import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { LoginFB } from "../modules/user";

export default function LogIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const location = useLocation();
    // console.log(location);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [InputLogin, setInputLogin] = useState({
        id: "",
        password: "",
    });

    const onSubmit = async (data) => {
        // console.log(data);
        setInputLogin(data);
        dispatch(LoginFB(data.id, data.password, data.name));
    };

    // console.log(watch("id"));
    // useEffect(() => {
    //     console.log(InputLogin);
    // }, [InputLogin]);

    return (
        <LogInContainer>
            <Title>로그인</Title>
            <LogInWrapper>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="PutId">
                        <label>아이디</label>
                        <input
                            type="email"
                            name="id"
                            placeholder="아이디를 입력해주세요"
                            {...register("id", {
                                required: true,
                            })}
                        />
                    </div>
                    {errors.id && errors.id.type === "required" && (
                        <p> 아이디를 입력해주세요</p>
                    )}
                    <div className="PutPw">
                        <label>비밀번호</label>
                        <input
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            name="password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                    </div>
                    {errors.password && errors.password.type === "required" && (
                        <p> 비밀번호가 입력되지 않았습니다</p>
                    )}
                    <FindWrap>
                        <FindBtn>아이디찾기</FindBtn>
                        <FindBtn>비밀번호 찾기</FindBtn>
                    </FindWrap>
                    <LoginBtn>
                        <input type="submit" value="로그인" />
                    </LoginBtn>
                </form>
                <SignupBtn>
                    <button
                        onClick={() => {
                            navigate("/SignUp");
                        }}
                    >
                        회원가입
                    </button>
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
const LogInWrapper = styled.div`
    margin: 0 auto;
    max-width: 640px;
    text-align: center;
    label {
        line-height: 2;
        display: flex;
        align-items: center;
        margin: 10px;
        color: black;
        font-size: 14px;
        font-weight: 200;
        min-width: 55px;
    }
    input {
        display: block;
        box-sizing: border-box;
        width: 340px;
        border-radius: 4px;
        border: 1px solid rgb(41, 41, 41);
        padding: 10px 10px;
        margin: 0 auto;
        font-size: 14px;
    }
`;

const FindWrap = styled.div`
    margin: 0 10px 10px;
`;
const LoginBtn = styled.div`
    margin-bottom: 5px;
    input[type="submit"] {
        background: rgb(95, 0, 128);
        color: white;
        border: none;
        margin-bottom: 20px;
        padding: 10px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 10px;
        width: 140px;
    }
`;
const SignupBtn = styled.div`
    button {
        background: rgb(95, 0, 128);
        color: white;
        border: none;
        border-radius: 5px;
        margin-bottom: 20px;
        padding: 10px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 5px;
        width: 140px;
    }
`;
const FindBtn = styled.button`
    border: none;
    border-radius: 5px;
    background-color: rgb(238 226 242);
    margin: 10px;
    color: grey;
    border: none;
    width: 120px;
    padding: 10px;
`;
// const PwFind = styled.button`
//     border: none;
//     background-color: none;
// `;
