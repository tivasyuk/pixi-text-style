import React from 'react';
import {Container} from "react-bootstrap";
import TextControl from "./controls/TextControl";
import FontControl from "./controls/FontControl";
import FillControl from "./controls/FillControl";
import StrokeControl from "./controls/StrokeControl";
import LayoutControl from "./controls/LayoutControl";
import DropShadowControl from "./controls/DropShadowControl";
import MultilineControl from "./controls/MultilineControl";
import TextureControl from "./controls/TextureControl";
import BackgroundControl from "./controls/BackgroundControl";

const Navbar = (props) => {

    const refreshPage = () => {
        props.refreshSettings();
    };

    return (
        <nav className={`nav ${props.settings.navOpen ? "menuOpen" : "menuClose"}`}>
            <Container>
                <h3 className="title">PixiJS TextStyle
                    <div onClick={refreshPage} className="refreshBtn">
                        <i className="uil uil-refresh"></i>
                    </div>
                </h3>

                <TextControl title={"Text"} updateStyle={props.updateStyle}
                             text={props.styles.textValue}
                />
                <FontControl title={"Font"} updateStyle={props.updateStyle} refreshFontFamily={props.refreshFontFamily}
                             importFontFamily={props.importFontFamily} fonts={props.fonts}
                             fontFamily={props.styles.fontFamily}
                             fontSize={props.styles.fontSize}
                             fontStyle={props.styles.fontStyle}
                             fontVariant={props.styles.fontVariant}
                             fontWeight={props.styles.fontWeight}
                />
                <FillControl title={"Fill"} updateStyle={props.updateStyle}
                             fill={props.styles.fill}
                             fillGradientType={props.styles.fillGradientType}
                             fillGradientStops={props.styles.fillGradientStops}
                />
                <StrokeControl title={"Stroke"} updateStyle={props.updateStyle}
                               stroke={props.styles.stroke}
                               strokeThickness={props.styles.strokeThickness}
                               lineJoin={props.styles.lineJoin}
                               miterLimit={props.styles.miterLimit}
                />
                <LayoutControl title={"Layout"} updateStyle={props.updateStyle}
                               letterSpacing={props.styles.letterSpacing}
                               textBaseline={props.styles.textBaseline}
                />
                <DropShadowControl title={"Drop Shadow"} updateStyle={props.updateStyle}
                                   dropShadow={props.styles.dropShadow}
                                   dropShadowColor={props.styles.dropShadowColor}
                                   dropShadowAlpha={props.styles.dropShadowAlpha}
                                   dropShadowAngle={props.styles.dropShadowAngle}
                                   dropShadowBlur={props.styles.dropShadowBlur}
                                   dropShadowDistance={props.styles.dropShadowDistance}
                />
                <MultilineControl title={"Multiline"} updateStyle={props.updateStyle}
                                  wordWrap={props.styles.wordWrap}
                                  breakWords={props.styles.breakWords}
                                  align={props.styles.align}
                                  whiteSpace={props.styles.whiteSpace}
                                  wordWrapWidth={props.styles.wordWrapWidth}
                                  lineHeight={props.styles.lineHeight}
                                  leading={props.styles.leading}
                />
                <TextureControl title={"Texture"} updateStyle={props.updateStyle}
                                padding={props.styles.padding}
                                trim={props.styles.trim}
                />
                <BackgroundControl title={"Background"} updateStyle={props.updateStyle}
                                   backgroundColor={props.styles.backgroundColor}
                                   bgImage={props.settings.bgImage}
                                   bgSize={props.settings.bgSize}
                                   addBackgroundImage={props.addBackgroundImage}
                                   updateSetting={props.updateSetting}
                />
            </Container>
        </nav>
    )
};

export default Navbar;