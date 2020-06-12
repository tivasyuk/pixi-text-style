import React from 'react';
import {connect} from "react-redux";
import WebFont from "webfontloader";
import {addFontFamily, fonts, refreshFontFamily, refreshSettings, updateStyle} from "../../redux/style-reducer";
import Navbar from "./Navbar";
import NavSettings from "./settings/NavSettings";
import {updateSetting} from "../../redux/settings-reducer";

class NavbarContainer extends React.Component {

    importFontFamily = (e) => {
        if (e.target.files.length) {
            const file = (typeof e.target === 'undefined') ? e[0] : e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {

                let name = file.name,
                    urls = e.target.result;

                const TYPE_MAP = {
                    ".eot": "embedded-opentype",
                    ".ttf": "truetype",
                    ".ttc": "truetype",
                    ".woff": "woff",
                    ".svg": "svg",
                    ".woff2": "woff2",
                    ".otf": "opentype"
                };

                let fontStyle = document.createElement("style");
                fontStyle.type = "text/css";

                if (!Array.isArray(urls)) {
                    urls = [urls];
                }

                let urlsMap = urls.map(url => {
                    let extName = "." + name.split(".").pop().toLowerCase();
                    let fileType = TYPE_MAP[extName] || "";

                    return `url('${url}') format('${fileType}')`;
                });

                let fontName = name.split(".").shift();

                if (document.getElementById(fontName)) {
                    document.getElementById(fontName).remove();
                }

                fontStyle.id = `${fontName}`;
                fontStyle.textContent = `@font-face { font-family:${fontName}; src: ${urlsMap.join(",")};}`;

                document.body.appendChild(fontStyle);

                WebFont.load({
                    custom: {
                        families: [fontName]
                    },
                    active: () => {
                        this.props.addFontFamily(fontName);
                    }
                });
            };
        }
    };

    addBackgroundImage = (e) => {
        if (e.target.files.length) {
            const file = (typeof e.target === 'undefined') ? e[0] : e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                this.props.updateSetting('bgImage', reader.result);
            };
        }
    };

    render() {
        return <div className={"navWrapper"}>
            <NavSettings settings={this.props.settings}
                         updateSetting={this.props.updateSetting}

            />

            <Navbar {...this.props} importFontFamily={this.importFontFamily}
                    addBackgroundImage={this.addBackgroundImage}
                    updateSetting={this.props.updateSetting}
            />
        </div>
    }
}

const mapStateToProps = (state) => ({
    styles: state.styleApp,
    fonts: fonts,
    settings: state.settingsApp
});

export default connect(mapStateToProps, {
    refreshSettings,
    refreshFontFamily,
    addFontFamily,
    updateStyle,
    updateSetting
})(NavbarContainer);