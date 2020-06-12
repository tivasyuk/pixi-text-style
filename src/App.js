import React from 'react';
import './App.scss';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import PreviewContainer from "./components/Preview/PreviewContainer";
import {connect} from "react-redux";
import {THEME_DARK} from "./redux/settings-reducer";

import "../src/assets/css/menuSettings.scss";

import "../src/assets/css/menuRight.scss";
import "../src/assets/css/menuLeft.scss";

import "../src/assets/css/themeDark.scss";
import "../src/assets/css/themeLight.scss";

const App = ({settings}) => {

    let color = settings.themeColor;
    const themeColor = localStorage.getItem('themeColor');
    color = themeColor || color;

    let position = settings.navPosition;
    const lsPosition = localStorage.getItem('navPosition');
    position = lsPosition || position;

    let style = color === THEME_DARK ? "dark" : "light";

    return (
        <div className={`App ${style} ${position}`}>
            <PreviewContainer/>
            <NavbarContainer/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    settings: state.settingsApp
});

export default connect(mapStateToProps, {})(App);
