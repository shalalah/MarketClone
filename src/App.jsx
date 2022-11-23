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
import { useSelector } from "react-redux";

function App() {
    //로그인
    const is_login = useSelector((state) => state.user.is_login);
    // console.log(is_login);
    const nick = useSelector((state) => state.user.name);
    // console.log(nick);

    return (
        <div className="App">
            <Header is_login={is_login} nick={nick} />
            <Category />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/BestItem" element={<BestItem />} />
                <Route path="/SignUp/*" element={<SignUp />} />
                <Route
                    path="/LogIn/*"
                    element={<LogIn is_login={is_login} />}
                />
                <Route path="/Detail/*" element={<Detail />}>
                    <Route path=":id" element={<ProductDetail />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
