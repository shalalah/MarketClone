import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
// import styled from "styled-components";
import "./App.css";
import Header from "./component/Header";
import Category from "./component/Category";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Detail from "./pages/Detail";
import ProductDetail from "./component/detail/ProductDetail";
import Footer from "./component/Footer";
import BestItem from "./component/category/BestItem";
import NotFound from "./pages/NotFound";

//로그인
import { useSelector, useDispatch } from "react-redux";
import { logInCheckFB } from "./modules/user";
import { apiKey } from "./modules/Firebase";

function App() {
    //로그인
    const dispatch = useDispatch();
    const is_login = useSelector((state) => state.user.is_login);
    // console.log(is_login);
    const nick = useSelector((state) => state.user.name);

    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(_session_key);

    useEffect(() => {
        if (is_session) {
            dispatch(logInCheckFB());
        }
    }, []);
    return (
        <div className="App">
            <Header is_session={is_session} nick={nick} />
            <Category />
            <Routes>
                <Route path={process.env.PUBLIC_URL + "/"} element={<Main />} />
                <Route
                    path={process.env.PUBLIC_URL + "/BestItem"}
                    element={<BestItem />}
                />
                <Route
                    path={process.env.PUBLIC_URL + "/SignUp/*"}
                    element={<SignUp />}
                />
                <Route
                    path={process.env.PUBLIC_URL + "/LogIn/*"}
                    element={<LogIn is_login={is_login} />}
                />
                <Route
                    path={process.env.PUBLIC_URL + "/Detail/*"}
                    element={<Detail />}
                >
                    <Route
                        path={process.env.PUBLIC_URL + ":id"}
                        element={<ProductDetail />}
                    />
                </Route>
                <Route
                    path={process.env.PUBLIC_URL + "*"}
                    element={<NotFound />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
