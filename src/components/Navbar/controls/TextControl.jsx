import React, {useEffect, useState} from 'react';
import {compose} from "redux";
import {withAccordion} from "../../../hoc/withAccordion";

const TextControl = ({text, updateStyle}) => {

    let [textValue, setTextValue] = useState(text);

    useEffect( () => {
        setTextValue(text);
    }, [text]);

    const onTextChange = (e) => {
        let value = e.currentTarget.value;
        setTextValue(value);
        updateStyle(e.currentTarget.id, value);
    };

    return (
        <div>
            <textarea value={textValue} onChange={onTextChange} className={"form-control"} id="textValue" />
        </div>
  )
};

export default compose(withAccordion)(TextControl);