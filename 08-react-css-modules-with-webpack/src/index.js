import React from "react";
import ReactDOM from "react-dom";
import style from "./index.scss";
import CSSModules from 'react-css-modules';

const
    App = ()=> <h1 styleName="header">Header with react css modules</h1>,
    StyledApp = CSSModules(App, style);

ReactDOM.render(
    <StyledApp/>,
    document.getElementById("app")
);