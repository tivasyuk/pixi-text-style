import React from 'react';
import PixiPreview from "./PixiPreview";
import {connect} from "react-redux";
import {Container, Stage} from "@inlet/react-pixi";
import Dimensions from 'react-dimensions'
import {compose} from "redux";
import {updateSetting} from "../../redux/settings-reducer";

class PixiPreviewContainer extends React.Component {

    state = {
        height: 400
    };

    componentWillMount() {
        let appWrapperWidth = document.getElementsByClassName("appWrapper")[0].offsetWidth;
        if (appWrapperWidth > 480){
            this.props.updateSetting("previewWidth", appWrapperWidth - 370);
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.containerWidth !== this.props.containerWidth) {
            let elem = document.getElementById("canvasContainer");
            elem.style.width = nextProps.containerWidth + 'px';
            this.props.updateSetting("previewWidth", nextProps.containerWidth);
        }

        return true;
    }


    resizePreview = (e) => {
        e.preventDefault();
        if (e.button.toString()) {
            e.which = e.button + 1;
        }
        if (e.which !== 1) return;

        let elem = document.getElementById("canvasContainer");
        let container = document.getElementById("previewContainer");
        let canMove = true;
        let width;
        let height;

        document.addEventListener('mousemove', (e) => {
            if (canMove) {

                width = e.pageX - elem.offsetLeft;
                height = e.pageY - elem.offsetTop;

                if (width < container.offsetWidth - 30 && width > 300) {
                    elem.style.width = width + 'px';
                    this.props.updateSetting('previewWidth', width);
                }
                if (height > 200) {
                    elem.style.height = height + 'px';
                    this.setState({
                        height: height
                    });
                }
            }
        }, false);

        document.addEventListener('mouseup', (e) => {
            canMove = false;
        }, false);
    };

    movePixiContainer = (e) => {
        e.preventDefault();
        if (e.button.toString()) {
            e.which = e.button + 1;
        }
        if (e.which !== 1) return;

        let canMove = true;
        let width;
        let height;

        document.addEventListener('mousemove', (e) => {
            if (canMove) {

                if (this.props.settings.moveCanvas) {

                    width = this.props.settings.canvasPosX + e.movementX;
                    height = this.props.settings.canvasPosY + e.movementY;

                    this.props.updateSetting("canvasPosX", width);
                    this.props.updateSetting("canvasPosY", height);

                } else {

                    width = this.props.settings.bgPosX + e.movementX;
                    height = this.props.settings.bgPosY + e.movementY;

                    this.props.updateSetting("bgPosX", width);
                    this.props.updateSetting("bgPosY", height);
                }

            }
        }, false);

        document.addEventListener('mouseup', (e) => {
            canMove = false;
        }, false);
    };

    resizeBg = (e) => {
        if (!!this.props.settings.bgImage) {
            let value = 0;
            if (e.deltaY < 0) {
                value += 5;
            } else {
                value -= 5;
            }

            let bgSize = parseInt(this.props.settings.bgSize, 10) || 100;
            this.props.updateSetting("bgSize", `${bgSize + value}%`);
        }
    };

    render() {

        return (
            <div className={`canvasContainer`} id={"canvasContainer"}
                 style={{
                     backgroundColor: this.props.styles.backgroundColor,
                     backgroundImage: `url(${this.props.settings.bgImage})`,
                     backgroundPositionX: this.props.settings.bgPosX,
                     backgroundPositionY: this.props.settings.bgPosY,
                     backgroundSize: this.props.settings.bgSize,
                 }}>

                <Stage width={this.props.settings.previewWidth} height={this.state.height}
                       options={{transparent: true}} onMouseDown={this.movePixiContainer} onWheel={this.resizeBg} >
                    <Container x={this.props.settings.canvasPosX} y={this.props.settings.canvasPosY}>
                        <PixiPreview {...this.props} />
                    </Container>
                </Stage>
                <div className={"resizeArea"} id={"resizeArea"} onMouseDown={this.resizePreview}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    styles: state.styleApp,
    settings: state.settingsApp
});

export default compose(
    connect(mapStateToProps, {updateSetting}),
    Dimensions()
)(PixiPreviewContainer);