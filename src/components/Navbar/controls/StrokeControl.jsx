import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {compose} from "redux";
import {withAccordion} from "../../../hoc/withAccordion";

const StrokeControl = (props) => {

    let [strokeColorValue, setStrokeColor] = useState(props.stroke);
    let [strokeThicknessValue, setStrokeThickness] = useState(props.strokeThickness);
    let [lineJoinValue, setLineJoin] = useState(props.lineJoin);
    let [miterLimitValue, setMiterLimit] = useState(props.miterLimit);

    useEffect(() => {
        setStrokeColor(props.stroke);
        setStrokeThickness(props.strokeThickness);
        setLineJoin(props.lineJoin);
        setMiterLimit(props.miterLimit);
    }, [props.stroke, props.strokeThickness, props.lineJoin, props.miterLimit]);

    const onStrokeColorChange = (e) => {
        let value = e.currentTarget.value;
        setStrokeColor(value);
        props.updateStyle(e.currentTarget.id, value);
    };
    const onStrokeThicknessChange = (e) => {
        let value = e.currentTarget.valueAsNumber;
        setStrokeThickness(value);
        props.updateStyle(e.currentTarget.id, value);
    };
    const onLineJoinChange = (e) => {
        let value = e.currentTarget.value;
        setLineJoin(value);
        props.updateStyle(e.currentTarget.id, value);
    };
    const onMiterLimitChange = (e) => {
        let value = e.currentTarget.valueAsNumber;
        setMiterLimit(value);
        props.updateStyle(e.currentTarget.id, value);
    };


    return (
        <div>

            <Row>
                <Col xs={5}>
                    <label htmlFor="stroke" title="stroke">Color</label>
                </Col>
                <Col xs={7}>
                    <input value={strokeColorValue} onChange={onStrokeColorChange} className={"form-control color"} id="stroke"
                           type={"color"}/>
                </Col>
            </Row>

            <Row>
                <Col xs={5}>
                    <label htmlFor="strokeThickness" title="strokeThickness">Thickness</label>
                </Col>
                <Col xs={7}>
                    <input value={strokeThicknessValue} onChange={onStrokeThicknessChange} className={"form-control"}
                           type={"number"} step="1" min="0" id="strokeThickness" />
                </Col>
            </Row>

            <Row>
                <Col xs={5}>
                    <label htmlFor="lineJoin" title="lineJoin">Line Join</label>
                </Col>
                <Col xs={7}>
                    <select value={lineJoinValue} onChange={onLineJoinChange} className={"form-control"} id="lineJoin">
                        <option value="miter">miter</option>
                        <option value="round">round</option>
                        <option value="bevel">bevel</option>
                    </select>
                </Col>
            </Row>

            <Row>
                <Col xs={5}>
                    <label htmlFor="miterLimit" title="miterLimit">Miter Limit</label>
                </Col>
                <Col xs={7}>
                    <input value={miterLimitValue} onChange={onMiterLimitChange} className={"form-control"}
                           type={"number"} step="1" min="0" id="miterLimit" />
                </Col>
            </Row>

        </div>
    )
};

export default compose(withAccordion)(StrokeControl);