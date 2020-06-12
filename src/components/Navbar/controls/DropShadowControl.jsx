import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {compose} from "redux";
import {withAccordion} from "../../../hoc/withAccordion";

const DropShadowControl = (props) => {

    let [dropShadowValue, setDropShadow] = useState(props.dropShadow);
    let [dropShadowColorValue, setDropShadowColor] = useState(props.dropShadowColor);
    let [dropShadowAlphaValue, setDropShadowAlpha] = useState(props.dropShadowAlpha);
    let [dropShadowAngleValue, setDropShadowAngle] = useState(props.dropShadowAngle);
    let [dropShadowBlurValue, setDropShadowBlur] = useState(props.dropShadowBlur);
    let [dropShadowDistanceValue, setDropShadowDistance] = useState(props.dropShadowDistance);

    useEffect(() => {
        setDropShadow(props.dropShadow);
        setDropShadowColor(props.dropShadowColor);
        setDropShadowAlpha(props.dropShadowAlpha);
        setDropShadowAngle(props.dropShadowAngle);
        setDropShadowBlur(props.dropShadowBlur);
        setDropShadowDistance(props.dropShadowDistance);
    }, [props.dropShadow, props.dropShadowColor, props.dropShadowAlpha, props.dropShadowAngle, props.dropShadowBlur, props.dropShadowDistance]);

    const onDropShadowChange = (e) => {
        setDropShadow(!dropShadowValue);
        props.updateStyle(e.currentTarget.id, !dropShadowValue);
    };
    const onDropShadowColorChange = (e) => {
        let value = e.currentTarget.value;
        setDropShadowColor(value);
        props.updateStyle(e.currentTarget.id, value);
    };
    const onDropShadowAlphaChange = (e) => {
        let value = e.currentTarget.valueAsNumber;
        setDropShadowAlpha(value);
        props.updateStyle(e.currentTarget.id, value);
    };
    const onDropShadowAngleChange = (e) => {
        let value = e.currentTarget.valueAsNumber;
        setDropShadowAngle(value);
        props.updateStyle(e.currentTarget.id, value);
    };
    const onDropShadowBlurChange = (e) => {
        let value = e.currentTarget.valueAsNumber;
        setDropShadowBlur(value);
        props.updateStyle(e.currentTarget.id, value);
    };
    const onDropShadowDistanceChange = (e) => {
        let value = e.currentTarget.valueAsNumber;
        setDropShadowDistance(value);
        props.updateStyle(e.currentTarget.id, value);
    };


    return (
        <div>

            <Row>
                <Col xs={5}>
                    <label htmlFor="dropShadow" title="dropShadow">Enable</label>
                </Col>
                <Col xs={7}>
                    <input checked={dropShadowValue} onChange={onDropShadowChange} className={"form-control"}
                           type={"checkbox"} id="dropShadow"/>
                </Col>
            </Row>
            {dropShadowValue &&
            <div>
                <Row>
                    <Col xs={5}>
                        <label htmlFor="dropShadowColor" title="dropShadowColor">Color</label>
                    </Col>
                    <Col xs={7}>
                        <input value={dropShadowColorValue} onChange={onDropShadowColorChange}
                               className={"form-control color"} id="dropShadowColor"
                               type={"color"}/>
                    </Col>
                </Row>

                <Row>
                    <Col xs={5}>
                        <label htmlFor="dropShadowAlpha" title="dropShadowAlpha">Alpha</label>
                    </Col>
                    <Col xs={7}>
                        <input value={dropShadowAlphaValue} onChange={onDropShadowAlphaChange}
                               className={"form-control"}
                               type={"number"} step="0.1" min="0" max="1" id="dropShadowAlpha"/>
                    </Col>
                </Row>

                <Row>
                    <Col xs={5}>
                        <label htmlFor="dropShadowAngle" title="dropShadowAngle">Angle</label>
                    </Col>
                    <Col xs={7}>
                        <input value={dropShadowAngleValue} onChange={onDropShadowAngleChange}
                               className={"form-control"}
                               type={"number"} step="0.1" id="dropShadowAngle"/>
                    </Col>
                </Row>

                <Row>
                    <Col xs={5}>
                        <label htmlFor="dropShadowBlur" title="dropShadowBlur">Blur</label>
                    </Col>
                    <Col xs={7}>
                        <input value={dropShadowBlurValue} onChange={onDropShadowBlurChange} className={"form-control"}
                               type={"number"} step="1" id="dropShadowBlur"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={5}>
                        <label htmlFor="dropShadowDistance" title="dropShadowDistance">Distance</label>
                    </Col>
                    <Col xs={7}>
                        <input value={dropShadowDistanceValue} onChange={onDropShadowDistanceChange}
                               className={"form-control"}
                               type={"number"} step="1" id="dropShadowDistance"/>
                    </Col>
                </Row>
            </div>
            }
        </div>
    )
};

export default compose(withAccordion)(DropShadowControl);