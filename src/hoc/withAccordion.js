import React, {Component, useState} from "react";
import {connect} from "react-redux";

export const withAccordion = (Component) => {

    const AccordionComponent = (props) => {

        let [accordion, setAccordionMode] = useState(true);

        const onAccordionChange = () => {
            setAccordionMode(!accordion);
        };

        return (
            <div>
                {props.elem && props.elem === "h2"
                ?
                    <h2 onClick={onAccordionChange} className={`h2 accordion ${accordion ? "expanded" : "collapsed"}`}>
                        {props.title}
                    </h2>
                :
                    <h4 onClick={onAccordionChange} className={`accordion ${accordion ? "expanded" : "collapsed"}`}>
                        {props.title}
                    </h4>
                }

                <div className={`params ${accordion ? "" : "hide"}`}>
                    <Component {...props} />
                </div>
            </div>
        );

    };

    return connect(null)(AccordionComponent);
};