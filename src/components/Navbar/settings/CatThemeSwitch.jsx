import React, {useEffect, useState} from 'react';

const CatThemeSwitch = ({settings, updateSetting}) => {

    let isCatLover = JSON.parse(localStorage.getItem('catLoverTheme')) || settings.catLoverTheme;

    let [catLoverValue, setCatLover] = useState(isCatLover);

    useEffect(() => {
        setCatLover(isCatLover);
    }, [isCatLover]);


    const toggleCatLover = (e) => {
        setCatLover(!catLoverValue);
        updateSetting("catLoverTheme", !catLoverValue);
        localStorage.setItem('catLoverTheme', !catLoverValue);
    };

    return (
        <span className={"catLoverCheck"}>
            <input type="checkbox" className="catLover-checkbox" name="catLover" id="catLover" checked={catLoverValue} onChange={toggleCatLover} />
            <label htmlFor="catLover"></label>
        </span>
    )
};

export default CatThemeSwitch;