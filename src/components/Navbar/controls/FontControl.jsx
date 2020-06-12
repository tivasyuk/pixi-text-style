import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {compose} from "redux";
import {withAccordion} from "../../../hoc/withAccordion";

const FontControl = (props) => {

    let [fontFamilyValue, setFontFamily] = useState(props.fontFamily);
    let [fontSizeValue, setFontSize] = useState(props.fontSize);
    let [fontStyleValue, setFontStyle] = useState(props.fontStyle);
    let [fontVariantValue, setFontVariant] = useState(props.fontVariant);
    let [fontWeightValue, setFontWeight] = useState(props.fontWeight);

    useEffect(() => {
        setFontFamily(props.fontFamily);
        setFontSize(props.fontSize);
        setFontStyle(props.fontStyle);
        setFontVariant(props.fontVariant);
        setFontWeight(props.fontWeight);
    }, [props.fontFamily, props.fontSize, props.fontStyle, props.fontVariant, props.fontWeight]);

    const onFontFamilyChange = (e) => {
        let value = e.currentTarget.value;
        setFontFamily(value);
        props.updateStyle(e.currentTarget.id, value);
    };
    const onFontFamilyReset = () => {
        props.refreshFontFamily();
    };
    const onFontSizeChange = (e) => {
        let value = e.currentTarget.valueAsNumber;
        setFontSize(value);
        props.updateStyle(e.currentTarget.id, value);
    };
    const onFontStyleChange = (e) => {
        let value = e.currentTarget.value;
        setFontStyle(value);
        props.updateStyle(e.currentTarget.id, value);
    };
    const onFontVariantChange = (e) => {
        let value = e.currentTarget.value;
        setFontVariant(value);
        props.updateStyle(e.currentTarget.id, value);
    };
    const onFontWeightChange = (e) => {
        let value = e.currentTarget.value;
        setFontWeight(value);
        props.updateStyle(e.currentTarget.id, value);
    };

    const importFontFamily = (e) => {
        props.importFontFamily(e);
    };

    let fontFamilyElem = [...props.fonts].map((value, index) => {
        return (
            <option value={value} key={index.toString()}>{value}</option>
        )
    });


    let fontAccept = ".ttf, .woff, .woff2";
    if (navigator.userAgent.search(/Chrome/) > 0 ||
        navigator.userAgent.search(/OPR/) > 0 ||
        navigator.userAgent.search(/Safari/) > 0) {
        fontAccept = ".ttf, .woff, .woff2, .svg";
    }
    if (navigator.userAgent.search(/Firefox/) > 0) {
        fontAccept = ".ttf, .otf, .woff, .woff2";
    }
    if (navigator.userAgent.search(/MSIE/) > 0 ||
        navigator.userAgent.search(/NET CLR /) > 0 ||
        navigator.userAgent.search(/Edge/) > 0) {
        fontAccept = ".ttf, .otf, .woff, .eot";
    }


    return (
        <div>

            <Row>
                <Col xs={5}>
                    <label htmlFor="fontFamily" title="fontFamily">Font Family</label>
                </Col>
                <Col xs={7}>
                    <select value={fontFamilyValue} onChange={onFontFamilyChange} className={"form-control"} id="fontFamily">
                        {fontFamilyElem}
                    </select>
                </Col>
            </Row>

            <Row>
                <Col xs={5}></Col>
                <Col xs={7}>
                    <div className="btn-group btn-group-xs btn-group-full">
                        <button title="Add local custom fonts" className="btn btn-primary btn-file">
                            <input type="file" accept={fontAccept} onChange={importFontFamily}/>
                            <i className="uil uil-plus"></i> Add
                        </button>
                        <button title="Clear all customs fonts" className="btn btn-primary" onClick={onFontFamilyReset}>
                            <i className="uil uil-multiply"></i> Clear
                        </button>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={5}>
                    <label htmlFor="fontSize" title="fontSize">Font Size</label>
                </Col>
                <Col xs={7}>
                    <input value={fontSizeValue} onChange={onFontSizeChange} className={"form-control"}
                           type={"number"} step="1" min="1" id="fontSize" />
                </Col>
            </Row>

            <Row>
                <Col xs={5}>
                    <label htmlFor="fontStyle" title="fontStyle">Font Style</label>
                </Col>
                <Col xs={7}>
                    <select value={fontStyleValue} onChange={onFontStyleChange} className={"form-control"} id="fontStyle">
                        <option value="normal">normal</option>
                        <option value="italic">italic</option>
                    </select>
                </Col>
            </Row>

            <Row>
                <Col xs={5}>
                    <label htmlFor="fontVariant" title="fontVariant">Font Variant</label>
                </Col>
                <Col xs={7}>
                    <select value={fontVariantValue} onChange={onFontVariantChange} className={"form-control"} id="fontVariant">
                        <option value="normal">normal</option>
                        <option value="small-caps">small-caps</option>
                    </select>
                </Col>
            </Row>


            <Row>
                <Col xs={5}>
                    <label htmlFor="fontWeight" title="fontWeight">Font Weight</label>
                </Col>
                <Col xs={7}>
                    <select value={fontWeightValue} onChange={onFontWeightChange} className={"form-control"} id="fontWeight">
                        <option value="normal">normal</option>
                        <option value="bold">bold</option>
                        <option value="bolder">bolder</option>
                        <option value="lighter">lighter</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                        <option value="600">600</option>
                        <option value="700">700</option>
                        <option value="800">800</option>
                        <option value="900">900</option>
                    </select>
                </Col>
            </Row>

        </div>
    )
};

export default compose(withAccordion)(FontControl);