// import axios from "axios";
import { auth, db } from "./Firebase";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
// import {
//     collection,
//     doc,
//     getDocs,
//     addDoc,
//     updateDoc,
//     deleteDoc,
//     where,
//     query,
// } from "firebase/firestore";

const JOIN = "user/JOIN";
const LOG_IN = "user/LOG_IN";
const LOG_OUT = "user/LOG_OUT";
//초기값
const initialState = {
    user: "",
    name: "",
    is_login: false,
};

export const Login = (user_name, user_id) => {
    return { type: LOG_IN, user_name, user_id };
};
export const Logout = (user) => {
    return { type: LOG_OUT, user };
};

export const Join = (user) => {
    return { type: JOIN, user };
};

// middlewares
export const LoginFB = (id, pw, user_name) => {
    return async function (dispatch) {
        await signInWithEmailAndPassword(auth, id, pw)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                dispatch(Login(user_name, id));
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
    };
};
export const LogoutFB = () => {
    return async function (dispatch) {
        console.log(auth.currentUser);
        auth.signOut()
            .then(() => {
                dispatch(Logout());
            })
            .catch((error) => {
                // An error happened.
            });
    };
};
//회원가입
export const signupFB = (id, pwd, user_name) => {
    return async function (dispatch) {
        await createUserWithEmailAndPassword(auth, id, pwd)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };
};

//middleware actions

//리듀서
// export default handleActions(
//     {
//         [SET_USER]: (state, action) =>
//             produce(state, (draft) => {
//                 // setCookie("is_login","success");
//                 draft.user = action.payload.user;
//                 draft.is_login = true;
//             }),
//         [LOG_OUT]: (state, action) =>
//             produce(state, (draft) => {
//                 // deleteCookie("is_login");
//                 draft.user = null;
//                 draft.is_login = false;
//             }),
//         [GET_USER]: (state, action) => produce(state, (draft) => {}),
//     },
//     initialState
// );
// //action creators export
// const actionCreators ={
//     logOut,
//     getUser,
//     loginAction,
//     signupFB,
// };
// const actionCreators = {
//     signupFB,
// };

// export { actionCreators };

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
