import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { signupFB } from "../modules/user";
// import { actionCreators as userActions } from "../modules/user";

import "../css/signup.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // console.log(data);
        // firebase
        dispatch(signupFB(data.id, data.password, data.name));
        alert("회원가입이 완료되었습니다.");
        navigate("/Login");
    };
    // your form submit function which will invoke after successful validation

    const password = useRef();
    password.current = watch("password");
    // console.log(watch("name"));

    return (
        <div className="sign_up">
            <div className="signUpTitle">회원가입</div>
            <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
                <div className="labelContainer">
                    <label>ID</label>
                    <input
                        name="id"
                        type="email"
                        placeholder="아이디를 이메일 형식으로 입력해주세요"
                        {...register("id", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                        })}
                    />
                </div>
                {errors.id && errors.id.type === "required" && (
                    <p> 아이디를 입력해주세요</p>
                )}
                <div className="labelContainer">
                    <label>닉네임</label>
                    {/* 버전7부터는  ref={register} 대신 {...register("value") 사용 */}
                    <input
                        name="name"
                        placeholder="닉네임을 입력해주세요"
                        {...register("name", {
                            required: true,
                            maxLength: 10,
                        })}
                    />
                </div>
                {errors.name && errors.name.type === "maxLength" && (
                    <p> 닉네임은 최대 10글자까지만 입력해주세요</p>
                )}
                {/* register your input into the hook by invoking the "register" function */}

                <div className="labelContainer">
                    <label>비밀번호</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="비밀번호를 입력해주세요"
                        {...register("password", {
                            required: true,
                            minLength: 6,
                        })}
                    />
                </div>
                {errors.password && errors.password.type === "required" && (
                    <p> 비밀번호가 입력되지 않았습니다</p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                    <p> 비밀번호는 6글자 이상으로 입력해주세요</p>
                )}
                <div className="labelContainer">
                    <label>비밀번호 확인</label>
                    {/* 어떠한 식으로 유효성 체크를 할지 조건을 넣어줌 */}
                    <input
                        type="password"
                        name="password_confirm"
                        placeholder="비밀번호를 한 번 더 입력해주세요"
                        {...register("password_confirm", {
                            required: true,
                            validate: (value) => value === password.current,
                        })}
                    />
                    {/* 유효성 체크에 걸렸을 때 에러 분구를 실행해줌 */}
                    {errors.password_confirm &&
                        errors.password_confirm.type === "required" && (
                            <p>
                                비밀번호 확인란에 비밀번호를 한 번 더
                                입력해주세요
                            </p>
                        )}
                </div>
                {errors.password_confirm &&
                    errors.password_confirm.type === "validate" && (
                        <p> 비밀번호가 일치하지 않습니다</p>
                    )}
                <div className="submit-container">
                    <input
                        type="submit"
                        className="submitBox"
                        value="가입하기"
                    />
                </div>
            </form>
        </div>
    );
}
