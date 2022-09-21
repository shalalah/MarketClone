import { Route, Routes } from "react-router-dom";
// import styled from "styled-components";
import "./App.css";
import Header from "./component/Header";
import Category from "./component/Category";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Detail from "./pages/Detail";
import ProductDetail from "./component/ProductDetail";
import Footer from "./component/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Category />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/SignUp/*" element={<SignUp />} />
                <Route path="/LogIn/*" element={<LogIn />} />
                <Route path="/Detail/*" element={<Detail />}>
                    <Route path=":id" element={<ProductDetail />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
