import React, {useEffect, useState} from 'react';
import {THEME_DARK, THEME_LIGHT} from "../../../redux/settings-reducer";

const ThemeSwitch = ({settings, updateSetting}) => {

    let isChecked = localStorage.getItem('themeColor') || settings.themeColor;

    let [themeValue, setTheme] = useState(isChecked);

    useEffect(() => {
        setTheme(isChecked);
    }, [isChecked]);

    let isDark = themeValue === THEME_DARK;

    const toggleColor = (e) => {
        let val = isDark ? THEME_LIGHT : THEME_DARK;
        setTheme(val);
        updateSetting("themeColor", val);
        localStorage.setItem('themeColor', val);
    };

    return (
        <div className={"themeToggle"}>

            {/*<div><small>Dark Theme</small></div>*/}
            {/*<label className="switch">*/}
            {/*    <input type="checkbox" checked={isDark} onChange={toggleColor} />*/}
            {/*        <span className="slider round"></span>*/}
            {/*</label>*/}


            <div className={"checkboxTools"}>
                <input className="checkbox" type="checkbox" name="general" id="general" checked={!isDark} onChange={toggleColor} />
                <label className="for-checkbox" htmlFor="general"></label>
            </div>
        </div>
    )
};

export default ThemeSwitch;