import React, {useEffect, useState} from 'react';
import {MENU_LEFT, MENU_RIGHT} from "../../../redux/settings-reducer";

const NavToggle = ({settings, updateSetting}) => {

    let positionMenu = localStorage.getItem('navPosition') || settings.navPosition;

    let [positionValue, setMenuPosition] = useState(positionMenu);

    useEffect(() => {
        setMenuPosition(positionMenu);
    }, [positionMenu]);

    const changeMenuPosition = (e) => {
        let val = positionValue === MENU_RIGHT ? MENU_LEFT : MENU_RIGHT;
        setMenuPosition(val);
        updateSetting('navPosition', val);
        localStorage.setItem('navPosition', val);
    };
    return (
        <div className={"navToggle"}>
            <div className={`icon menuPosition ${positionValue}`} onClick={changeMenuPosition}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
};

export default NavToggle;