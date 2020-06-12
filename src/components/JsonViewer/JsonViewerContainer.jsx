import React from 'react';
import {connect} from "react-redux";
import {updateStyle} from "../../redux/style-reducer";
import {compose} from "redux";
import {withAccordion} from "../../hoc/withAccordion";

class JsonViewerContainer extends React.Component {
    initialStyles = {};
    newStyles = {};
    changedStyles = {};
    jsonStyles = null;
    importStyles = null;

    componentDidMount() {
        this.initialStyles = {
            ...this.props.styles
        };
    }

    exportToJson = () => {
        let a = document.createElement("a");
        let file = new Blob([JSON.stringify(this.changedStyles, null, 2)], {type: "text/plain"});
        a.href = URL.createObjectURL(file);
        a.download = "style.json";
        a.click();
    };


    importJson = (e) => {
        if (e.target.files.length) {
            const file = (typeof e.target === 'undefined') ? e[0] : e.target.files[0];
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = (e) => {
                this.importStyles = JSON.parse(e.target.result);
                this.applyImportStyles(this.importStyles)
            };
        }
    };

    applyImportStyles(importStyles) {
        let newStyles = {...this.initialStyles};
        Object.keys(newStyles).map((key, index) => {
            if (importStyles[key] && newStyles[key] !== importStyles[key]) {
                newStyles[key] = importStyles[key];
                this.props.updateStyle(key, importStyles[key]);
            } else {
                this.props.updateStyle(key, newStyles[key]);
            }
        });
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps !== this.props) {
            this.newStyles = {...nextProps.styles};

            Object.keys(this.newStyles).map((key, index) => {

                if (key === "textValue" || key === "backgroundColor") return;

                if (this.newStyles[key] !== this.initialStyles[key]) {
                    this.changedStyles[key] = this.newStyles[key];
                }
                if (this.changedStyles[key] && this.newStyles[key] === this.initialStyles[key]) {
                    delete this.changedStyles[key];
                }
                if (this.changedStyles[key] && key === "fill" && this.newStyles[key].length === 1 &&
                    this.newStyles[key][0] === this.initialStyles[key]) {
                    delete this.changedStyles[key];
                }
                if (this.changedStyles[key] && key === "fillGradientStops" && !this.newStyles[key].length) {
                    delete this.changedStyles[key];
                }
            });


            this.jsonStyles = Object.keys(this.changedStyles).map((key, index) => {
                let value = this.changedStyles[key];
                let valueHtml = null;

                if (typeof value === "string" || (typeof value === "object" && value.length === 1)) {
                    valueHtml = <span className="json-value"> "{value}"</span>
                } else if (typeof value === "number") {
                    valueHtml = <span className="json-value"> {value}</span>
                } else if (typeof value === "boolean") {
                    valueHtml = <span className="json-value"> {value.toString()}</span>
                }
                if ((typeof value === "object" && value.length > 1) || key === "fillGradientStops") {
                    let valArr = <span> [<span className="json-value"> {
                        Object.keys(value).map((valueKey, valueIndex) => {
                            let val = value[valueKey];
                            val = typeof value[valueKey] === "string" ? `"` + val + `"` : val;
                            let comma = valueIndex === Object.keys(value).length - 1 ? '\n' : ', ';
                            return <div
                                key={valueKey}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{val}{comma}</div>;
                        })
                    }</span>&nbsp;&nbsp;&nbsp;&nbsp;]</span>;
                    valueHtml = valArr
                }

                return <div key={key}>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="json-attr">"{key}"</span>:
                    {valueHtml}
                    {index === Object.keys(this.changedStyles).length - 1 ? '' : ','}
                </div>;
            });

            return true;
        }
    }

    render() {
        return <div>
            <pre className={"jsonFormatter"}>
                <code>
                    &#123;
                    {this.jsonStyles}
                    &#125;
                </code>
            </pre>

            <div className="btn-group pull-right">
                <button className="btn btn-primary btn-file">
                    <input type="file" accept=".json" onChange={this.importJson}/>
                    <i className="uil uil-import"></i> import
                </button>
                <button className="btn btn-primary" onClick={this.exportToJson}>
                    <i className="uil uil-export"></i> export
                </button>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({
    styles: state.styleApp
});

export default compose(
    withAccordion,
    connect(mapStateToProps, { updateStyle })
)(JsonViewerContainer)