import React, {useEffect, useState} from 'react';
import {compose} from "redux";
import {withAccordion} from "../../../hoc/withAccordion";
import {Col, Row} from "react-bootstrap";

const TextureControl = ({padding, trim, updateStyle}) => {

    let [paddingValue, setPaddingValue] = useState(padding);
    let [trimValue, setTrimValue] = useState(trim);

    useEffect( () => {
        setPaddingValue(padding);
        setTrimValue(trim);
    }, [padding, trim]);

    const onPaddingChange = (e) => {
        let value = e.currentTarget.valueAsNumber;
        setPaddingValue(value);
        updateStyle(e.currentTarget.id, value)
    };
    const onTrimChange = (e) => {
        setTrimValue(!trimValue);
        updateStyle(e.currentTarget.id, !trimValue)
    };

    return (
        <div>
            <Row>
                <Col xs={5}>
                    <label htmlFor="padding" title="padding">Padding</label>
                </Col>
                <Col xs={7}>
                    <input value={paddingValue} onChange={onPaddingChange} className={"form-control"}
                           type={"number"} step="1" id="padding" />
                </Col>
            </Row>

            <Row>
                <Col xs={5}>
                    <label htmlFor="trim" title="trim">Trim</label>
                </Col>
                <Col xs={7}>
                    <input checked={trimValue} onChange={onTrimChange} className={"form-control"}
                           type={"checkbox"} id="trim" />
                </Col>
            </Row>
        </div>
  )
};

export default compose(withAccordion)(TextureControl);