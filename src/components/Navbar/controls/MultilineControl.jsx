import React, {useEffect, useState} from 'react';
import {compose} from "redux";
import {withAccordion} from "../../../hoc/withAccordion";
import {Col, Row} from "react-bootstrap";

const MultilineControl = (props) => {

    let [wordWrapValue, setWordWrap] = useState(props.wordWrap);
    let [breakWordsValue, setBreakWords] = useState(props.breakWords);
    let [alignValue, setAlign] = useState(props.align);
    let [whiteSpaceValue, setWhiteSpace] = useState(props.whiteSpace);
    let [wordWrapWidthValue, setWordWrapWidth] = useState(props.wordWrapWidth);
    let [lineHeightValue, setLineHeight] = useState(props.lineHeight);
    let [leadingValue, setLeading] = useState(props.leading);

    useEffect( () => {
        setWordWrap(props.wordWrap);
        setBreakWords(props.breakWords);
        setAlign(props.align);
        setWhiteSpace(props.whiteSpace);
        setWordWrapWidth(props.wordWrapWidth);
        setLineHeight(props.lineHeight);
        setLeading(props.leading);
    }, [props.wordWrap, props.breakWords, props.align, props.whiteSpace, props.wordWrapWidth, props.lineHeight, props.leading]);

    const onWordWrapChange = (e) => {
        setWordWrap(!wordWrapValue);
        props.updateStyle(e.currentTarget.id, !wordWrapValue);
    };
    const onBreakWordsChange = (e) => {
        setWordWrap(!breakWordsValue);
        props.updateStyle(e.currentTarget.id, !breakWordsValue);
    };
    const onAlignChange = (e) => {
        let value = e.currentTarget.value;
        setAlign(value);
        props.updateStyle(e.currentTarget.id, value);
    };
    const onWhiteSpaceChange = (e) => {
        let value = e.currentTarget.value;
        setWhiteSpace(value);
        props.updateStyle(e.currentTarget.id, value);
    };
    const onWordWrapWidthChange = (e) => {
        let value = e.currentTarget.valueAsNumber;
        setWordWrapWidth(value);
        props.updateStyle(e.currentTarget.id, value);
    };
    const onLineHeightChange = (e) => {
        let value = e.currentTarget.valueAsNumber;
        setLineHeight(value);
        props.updateStyle(e.currentTarget.id, value);
    };
    const onLeadingChange = (e) => {
        let value = e.currentTarget.valueAsNumber;
        setLeading(value);
        props.updateStyle(e.currentTarget.id, value);
    };

    return (
        <div>
            <Row>
                <Col xs={5}>
                    <label htmlFor="wordWrap" title="wordWrap">Enable Word Wrap</label>
                </Col>
                <Col xs={7}>
                    <input checked={wordWrapValue} onChange={onWordWrapChange} className={"form-control"}
                           type={"checkbox"} id="wordWrap" />
                </Col>
            </Row>

            <Row>
                <Col xs={5}>
                    <label htmlFor="breakWords" title="breakWords">Break Words</label>
                </Col>
                <Col xs={7}>
                    <input checked={breakWordsValue} onChange={onBreakWordsChange} className={"form-control"}
                           type={"checkbox"} id="breakWords" />
                </Col>
            </Row>

            <Row>
                <Col xs={5}>
                    <label htmlFor="align" title="align">Align</label>
                </Col>
                <Col xs={7}>
                    <select value={alignValue} onChange={onAlignChange} className={"form-control"} id="align">
                        <option value="left">left</option>
                        <option value="center">center</option>
                        <option value="right">right</option>
                    </select>
                </Col>
            </Row>

            <Row>
                <Col xs={5}>
                    <label htmlFor="whiteSpace" title="whiteSpace">White Space</label>
                </Col>
                <Col xs={7}>
                    <select value={whiteSpaceValue} onChange={onWhiteSpaceChange} className={"form-control"} id="whiteSpace">
                        <option value="normal">normal</option>
                        <option value="pre">pre</option>
                        <option value="pre-line">pre-line</option>
                    </select>
                </Col>
            </Row>

            <Row>
                <Col xs={5}>
                    <label htmlFor="wordWrapWidth" title="wordWrapWidth">Wrap Width</label>
                </Col>
                <Col xs={7}>
                    <input value={wordWrapWidthValue} onChange={onWordWrapWidthChange} className={"form-control"}
                           type={"number"} step="10" min="0" id="wordWrapWidth" />
                </Col>
            </Row>

            <Row>
                <Col xs={5}>
                    <label htmlFor="lineHeight" title="lineHeight">Line Height</label>
                </Col>
                <Col xs={7}>
                    <input value={lineHeightValue} onChange={onLineHeightChange} className={"form-control"}
                           type={"number"} step="1" min="0" id="lineHeight" />
                </Col>
            </Row>

            <Row>
                <Col xs={5}>
                    <label htmlFor="leading" title="leading">Leading</label>
                </Col>
                <Col xs={7}>
                    <input value={leadingValue} onChange={onLeadingChange} className={"form-control"}
                           type={"number"} step="1" min="0" id="leading" />
                </Col>
            </Row>
        </div>
  )
};

export default compose(withAccordion)(MultilineControl);