// index.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import ScrollToTop from "./component/ScrollTop";
//리덕스
import { Provider } from "react-redux";
// import { createStore } from "redux";
import store from "./modules/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const store = createStore(rootReducer); // 스토어
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </Provider>
);
