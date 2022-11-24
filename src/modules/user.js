import { auth } from "./Firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    setPersistence,
    browserSessionPersistence,
} from "firebase/auth";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// 액션타입
const JOIN = "user/JOIN";
const LOG_IN = "user/LOG_IN";
const LOG_OUT = "user/LOG_OUT";
//초기값
const initialState = {
    user: "",
    name: "",
    is_login: false,
};

//액션 생성 함수
export const Login = (user_name, user_id, is_login) => {
    return { type: LOG_IN, user_name, user_id, is_login };
};
export const Logout = (user) => {
    return { type: LOG_OUT, user };
};

export const Join = (user) => {
    return { type: JOIN, user };
};

// middlewares

export const LoginFB = (id, pw) => {
    return async function (dispatch) {
        await setPersistence(auth, browserSessionPersistence).then(() => {
            signInWithEmailAndPassword(auth, id, pw)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user.displayName;
                    // console.log(user);
                    // onAuthStateChanged(auth, (users) => {
                    //     // console.log(users.displayName);
                    // });
                    dispatch(Login(user, id));
                })
                .catch((error) => {
                    if (error.code === "auth/invalid-email") {
                        alert("아이디를 이메일 형식으로 입력해주세요");
                    } else if (error.code === "auth/user-not-found") {
                        alert("존재하는 아이디가 없습니다.");
                    } else if (error.code === "auth/wrong-password") {
                        alert("비밀번호가 일치하지 않습니다.");
                    }
                });
        });
    };
};

export const LogoutFB = () => {
    return async function (dispatch) {
        // console.log(auth.currentUser);
        auth.signOut()
            .then(() => {
                dispatch(Logout());
                alert("로그아웃 처리되었습니다.");
            })
            .catch((error) => {
                // An error happened.
                console.log(error);
            });
    };
};
//회원가입
export const signupFB = (id, pwd, user_name) => {
    return async function () {
        await createUserWithEmailAndPassword(auth, id, pwd, user_name)
            .then(async (userCredential) => {
                // console.log(userCredential.user);
                await updateProfile(auth.currentUser, {
                    displayName: user_name,
                });
                // dispatch(Login(user_name, id));
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };
};

//로그인 체크
export const logInCheckFB = () => {
    return async function (dispatch) {
        onAuthStateChanged(auth, (users) => {
            if (users) {
                console.log(users);
                dispatch(Login(users.displayName, users.email));
            } else {
                dispatch(Logout());
            }
        });
    };
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "user/LOG_IN":
            return {
                is_login: true,
                name: action.user_name,
                user: action.user_id,
            };

        case "user/JOIN":
            break;

        case "user/LOG_OUT":
            return { is_login: false, user: action.user_name };

        default:
            return state;
    }
}
