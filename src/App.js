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
import "../src/assets/css/themeCatLover.scss";

let mrr, mey;
export const playMrAudio = () => {
    mrr.play();
};
export const playMeyAudio = () => {
    mey.play();
};

const App = ({settings}) => {

    let color = settings.themeColor;
    const themeColor = localStorage.getItem('themeColor');
    color = themeColor || color;
    let style = color === THEME_DARK ? "dark" : "light";

    let position = settings.navPosition;
    const lsPosition = localStorage.getItem('navPosition');
    position = lsPosition || position;

    let catLover = settings.catLoverTheme;
    const lsCatLover = JSON.parse(localStorage.getItem('catLoverTheme'));
    catLover = (lsCatLover || catLover) ? "catLover" : "";

    return (
        <div className={`App ${style} ${position} ${catLover}`}>
            <PreviewContainer/>
            <NavbarContainer/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    settings: state.settingsApp
});

export default connect(mapStateToProps, {})(App);
