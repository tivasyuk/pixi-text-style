import React, {useEffect, useState} from 'react';
import ThemeSwitch from "./ThemeSwitch";
import {compose} from "redux";
import Dimensions from 'react-dimensions'
import NavToggle from "./NavToggle";

const NavSettings = (props) => {
    let [openValue, setNavOpen] = useState(props.settings.navOpen);

    useEffect(() => {
        setNavOpen(props.settings.navOpen);
    }, [props.settings.navOpen]);

    const toggleMenu = (e) => {
        let elem = document.getElementById("canvasContainer");
        elem.style.width = openValue ? props.containerWidth - 30 + 'px' : props.containerWidth - 370 + 'px';
        props.updateSetting('previewWidth', openValue ? props.containerWidth - 30 : props.containerWidth - 370);

        setNavOpen(!openValue);
        props.updateSetting('navOpen', !openValue);
    };

    return (
        <div className={`settingButtons ${openValue ? "menuOpen" : "menuClose"}`}>

            <NavToggle settings={props.settings} updateSetting={props.updateSetting}/>

            <ThemeSwitch settings={props.settings} updateSetting={props.updateSetting}/>

            <div className={"navToggle"} >
                <div className={`icon menuToggle ${openValue ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </div>
    )
};

export default compose(
    Dimensions()
)(NavSettings);