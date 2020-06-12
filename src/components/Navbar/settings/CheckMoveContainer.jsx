import React, {useEffect, useState} from 'react';

const CheckMoveContainer = ({settings, updateSetting}) => {

    let [moveCanvasValue, setMoveCanvas] = useState(settings.moveCanvas);

    useEffect(() => {
        setMoveCanvas(settings.moveCanvas);
    }, [settings.moveCanvas]);

    const checkMove = (e) => {
        let value = e.currentTarget.id === "moveCanv";
        setMoveCanvas(value);
        updateSetting("moveCanvas", value);
    };

    return (
        <div className={"checkboxTools"}>
            Move
            <input className="checkbox-tools" type="radio" name="tools" id="moveCanv" checked={moveCanvasValue} onChange={checkMove} />
            <label className="for-checkbox-tools" htmlFor="moveCanv">
                canvas
            </label>

            <input className="checkbox-tools" type="radio" name="tools" id="moveBg"  onChange={checkMove} />
            <label className="for-checkbox-tools" htmlFor="moveBg">
                background
            </label>
        </div>
    )
};

export default CheckMoveContainer;