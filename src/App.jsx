// import react from "react";
import { Route, Switch } from "react-router-dom";
// import styled from "styled-components";
import "./App.css";
import Header from "./component/Header";
import Category from "./component/Category";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

function App() {
    return (
        <div className="App">
            <Header />
            <Category />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/SignUp" component={SignUp} />
                <Route exact path="/LogIn" component={LogIn} />
            </Switch>
        </div>
    );
}

export default App;
