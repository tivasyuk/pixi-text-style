import React, {useEffect, useState} from 'react';
import {compose} from "redux";
import {withAccordion} from "../../../hoc/withAccordion";
import {Col, Row} from "react-bootstrap";

const BackgroundControl = ({backgroundColor, updateStyle, addBackgroundImage, updateSetting, bgImage, bgSize}) => {

    let [bgColorValue, setColorValue] = useState(backgroundColor);
    let [bgSizeValue, setBgSizeValue] = useState(bgSize);

    useEffect(() => {
        setColorValue(backgroundColor);
        setBgSizeValue(bgSize);
    }, [backgroundColor, bgSize]);

    const onBgChange = (e) => {
        let value = e.currentTarget.value;
        setColorValue(value);
        updateStyle(e.currentTarget.id, value);
    };

    const addBackgroundPhoto = (e) => {
        addBackgroundImage(e);
    };
    const removeBackgroundPhoto = (e) => {
        updateSetting(e.currentTarget.id, '');
    };

    const onBgSizeChange = (e) => {
        let value = e.currentTarget.value;
        setBgSizeValue(value);
        updateSetting(e.currentTarget.id, value);
    };

    return (
        <div>
            <Row>
                <Col xs={5}>
                    <label htmlFor="bgColor" title="bgColor">Color</label>
                </Col>
                <Col xs={7}>
                    <input value={bgColorValue} onChange={onBgChange} className={"form-control color"}
                           id="backgroundColor"
                           type={"color"}/>
                </Col>
            </Row>
            <Row>
                <Col xs={5}>
                    <label htmlFor="addBgImage" title="addBgImage">Image</label>
                </Col>
                <Col xs={7}>
                    <button title="Add background photo" className="btn-sm btn btn-primary btn-block btn-file addBgBtn">
                        <input type="file" accept={".jpg, jpeg, .png"} onChange={addBackgroundPhoto} id={"addBgImage"}/>
                        <i className="uil uil-image-plus"></i>
                    </button>
                </Col>
            </Row>

            {!!bgImage &&

            <div>
                <Row>
                    <Col xs={5}>
                    </Col>
                    <Col xs={7}>
                        <button title="Remove background photo" className="btn-sm btn btn-primary btn-block"
                                onClick={removeBackgroundPhoto} id={"bgImage"}>
                                <i className="uil uil-multiply"></i> remove image
                        </button>
                    </Col>
                </Row>

                <Row>
                    <Col xs={5}>
                        <label htmlFor="bgSize" title="bgSize">Bg img Size</label>
                    </Col>
                    <Col xs={7}>
                        <input value={bgSizeValue} onChange={onBgSizeChange} className={"form-control"}
                               type={"text"} id="bgSize"/>
                    </Col>
                </Row>

            </div>

            }

        </div>
    )
};

export default compose(withAccordion)(BackgroundControl);