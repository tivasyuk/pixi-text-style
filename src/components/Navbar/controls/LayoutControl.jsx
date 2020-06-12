import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {compose} from "redux";
import {withAccordion} from "../../../hoc/withAccordion";

const LayoutControl = (props) => {

    let [letterSpacingValue, setLetterSpacing] = useState(props.letterSpacing);
    let [textBaselineValue, setTextBaseline] = useState(props.textBaseline);

    useEffect(() => {
        setLetterSpacing(props.letterSpacing);
        setTextBaseline(props.textBaseline);
    }, [props.letterSpacing, props.textBaseline]);


    const onLetterSpacingChange = (e) => {
        let value = e.currentTarget.valueAsNumber;
        setLetterSpacing(value);
        props.updateStyle(e.currentTarget.id, value);
    };
    const onTextBaselineChange = (e) => {
        let value = e.currentTarget.value;
        setTextBaseline(value);
        props.updateStyle(e.currentTarget.id, value);
    };


    return (
        <div>

            <Row>
                <Col xs={5}>
                    <label htmlFor="letterSpacing" title="letterSpacing">Letter Spacing</label>
                </Col>
                <Col xs={7}>
                    <input value={letterSpacingValue} onChange={onLetterSpacingChange} className={"form-control"}
                           type={"number"} step="1" min="0" id="letterSpacing" />
                </Col>
            </Row>

            <Row>
                <Col xs={5}>
                    <label htmlFor="textBaseline" title="textBaseline">Text Baseline</label>
                </Col>
                <Col xs={7}>
                    <select value={textBaselineValue} onChange={onTextBaselineChange} className={"form-control"} id="textBaseline">
                        <option value="alphabetic">alphabetic</option>
                        <option value="bottom">bottom</option>
                        <option value="middle">middle</option>
                        <option value="top">top</option>
                        <option value="hanging">hanging</option>
                    </select>
                </Col>
            </Row>

        </div>
    )
};

export default compose(withAccordion)(LayoutControl);