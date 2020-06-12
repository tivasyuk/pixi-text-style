import React, {useEffect, useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {compose} from "redux";
import {withAccordion} from "../../../hoc/withAccordion";
import s from './../Navbar.module.css';

const FillControl = (props) => {

    let [fillColorValue, setFillColor] = useState(props.fill);
    let [fillTypeValue, setFillType] = useState(props.fillGradientType);
    let [fillStopsValue, setFillStops] = useState(props.fillGradientStops);

    useEffect(() => {
        setFillColor(props.fill);
        setFillType(props.fillGradientType);
        setFillStops(props.fillGradientStops);
    }, [props.fill, props.fillGradientType, props.fillGradientStops]);

    const onFillColorChange = (index = 0) => (e) => {
        let value = e.currentTarget.value;

        let val = value;
        if (!value) {
            value = "#000000";
            val = [fillColorValue, value];
        }
        if (Array.isArray(props.fill)) {
            val = [...fillColorValue];
            val[index] = value;
        }

        setFillColor(val);
        props.updateStyle(e.currentTarget.id, val);
    };
    const removeColor = (index) => (e) => {
        let val = [...fillColorValue];
        val.splice(index, 1);

        setFillColor(val);
        props.updateStyle("fill", val);
    };

    const onFillTypeChange = (e) => {
        let value = parseInt(e.currentTarget.value);
        setFillType(value);
        props.updateStyle(e.currentTarget.id, value);
    };

    const onFillStopsChange = (index = 0) => (e) => {
        let value = e.currentTarget.valueAsNumber;

        let val = value;
        if (value === undefined) {
            value = 1;
            val = [fillStopsValue, value];
        }
        if (Array.isArray(props.fillGradientStops)) {
            val = [...fillStopsValue];
            val[index] = value;
        }

        setFillStops(val);
        props.updateStyle(e.currentTarget.id, val);
    };
    const removeFillStops = (index) => () => {
        let val = [...fillStopsValue];
        val.splice(index, 1);

        setFillStops(val);
        props.updateStyle("fillGradientStops", val);
    };

    let fillElem = <input value={fillColorValue} onChange={onFillColorChange(0)} className={"form-control color"}
                          type={"color"} id="fill"/>;
    if (Array.isArray(props.fill) && props.fill.length > 1) {
        fillElem = [...props.fill].map((value, index) => {
            return <div className={"input-group"} key={index.toString()}>
                <input value={fillColorValue[index]} onChange={onFillColorChange(index)} className={"form-control color"}
                       type={"color"} id="fill"/>
                <button onClick={removeColor(index)}>X</button>
            </div>
        });
    }

    let fillStopElem = [...props.fillGradientStops].map((value, index) => {
        return (
            <div className={"input-group"} key={index.toString()}>
                <input value={fillStopsValue[index]} onChange={onFillStopsChange(index)} className={"form-control"} id="fillGradientStops"
                       type={"number"} step="0.1" min="0" max="1"/>
                <button onClick={removeFillStops(index)}>X</button>
            </div>
        )
    });

    return (
        <div>

            <Row>
                <Col xs={5}>
                    <label htmlFor="color" title="color">Color</label>
                </Col>
                <Col xs={7} className={s.colourGroup}>
                    {fillElem}
                    <Button onClick={onFillColorChange(fillColorValue.length)} className="btn-sm" block id="fill">
                        <i className="uil uil-plus"></i> Add Color
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col xs={5}>
                    <label htmlFor="fillGradientType" title="fillGradientType">Gradient Type</label>
                </Col>
                <Col xs={7}>
                    <select value={fillTypeValue} onChange={onFillTypeChange} className={"form-control"}
                            id="fillGradientType">
                        <option value="0">linear vertical</option>
                        <option value="1">linear horizontal</option>
                    </select>
                </Col>
            </Row>

            <Row>
                <Col xs={5}>
                    <label htmlFor="fillStops" title="fillStops">Fill Gradient Stops</label>
                </Col>
                <Col xs={7}>
                    {fillStopElem}
                    <Button onClick={onFillStopsChange(fillStopsValue.length)} className="btn-sm" block id="fillGradientStops">
                        <i className="uil uil-plus"></i> Add Stop Point
                    </Button>
                </Col>
            </Row>

        </div>
    )
};

export default compose(withAccordion)(FillControl);