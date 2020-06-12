import React from 'react';
import {connect} from "react-redux";
import JsonViewerContainer from "../JsonViewer/JsonViewerContainer";
import PixiPreviewContainer from "../PixiPreview/PixiPreviewContainer";
import CheckMoveContainer from "../Navbar/settings/CheckMoveContainer";
import {updateSetting} from "../../redux/settings-reducer";

class PreviewContainer extends React.Component {

    render() {
        return (
            <div className={`appWrapper ${this.props.settings.navOpen ? "menuOpen" : "menuClose"}`}>
                <div className={"col-sm-12"} id={"previewContainer"}>
                    <div className={"previewTopLine"}>
                        <h3 className={"previewTitle"}>Preview</h3>
                        { !! this.props.settings.bgImage &&
                            <CheckMoveContainer settings={this.props.settings} updateSetting={this.props.updateSetting} />
                        }
                    </div>
                    <PixiPreviewContainer />
                </div>
                <div className={"col-sm-12 jsonViewer"}>
                    <JsonViewerContainer title={"JSON"} elem={"h2"}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    settings: state.settingsApp
});

export default connect(mapStateToProps, { updateSetting })(PreviewContainer);