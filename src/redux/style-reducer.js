const RESET_SETTINGS = "RESET_SETTINGS";
const ADD_FONT_FAMILY = "ADD_FONT_FAMILY";
const RESET_FONT_FAMILY = "RESET_FONT_FAMILY";
const UPDATE_STYLE = "UPDATE_STYLE";

export let fonts = [
    "Arial",
    "Arial Black",
    "Comic Sans MS",
    "Courier New",
    "Georgia",
    "Helvetica",
    "Impact",
    "Tahoma",
    "Times New Roman",
    "Verdana",
    "Georgia, serif",
    "\"Palatino Linotype\", \"Book Antiqua\", Palatino, serif",
    "\"Times New Roman\", Times, serif",
    "Arial, Helvetica, sans-serif",
    "\"Arial Black\", Gadget, sans-serif",
    "\"Comic Sans MS\", cursive, sans-serif",
    "Impact, Charcoal, sans-serif",
    "\"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif",
    "Tahoma, Geneva, sans-serif",
    "\"Trebuchet MS\", Helvetica, sans-serif",
    "Verdana, Geneva, sans-serif",
    "\"Courier New\", Courier, monospace",
    "\"Lucida Console\", Monaco, monospace"
];

let initialState = {
    textValue: 'Hello World',
    backgroundColor: "#ffffff",

    //font
    fontFamily: 'Arial',
    fontSize: 26,
    fontStyle: 'normal',
    fontVariant: 'normal',
    fontWeight: 'normal',

    //fill
    fill: '#000000',
    fillGradientType: 0,
    fillGradientStops: [],

    //stroke
    stroke: '#000000',
    strokeThickness: 0,
    lineJoin: "miter",
    miterLimit: 10,

    //layout
    letterSpacing: 0,
    textBaseline: "alphabetic",

    //drop shadow
    dropShadow: false,
    dropShadowColor: '#000000',
    dropShadowAlpha: 1,
    dropShadowAngle: Math.PI / 6,
    dropShadowBlur: 0,
    dropShadowDistance: 5,

    //multiline
    wordWrap: false,
    breakWords: false,
    align: "left",
    whiteSpace: "pre",
    wordWrapWidth: 100,
    lineHeight: 0,
    leading: 0,

    //texture
    padding: 0,
    trim: false
};

const styleReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_SETTINGS:
            return initialState;
        case RESET_FONT_FAMILY:
            return {
                ...state,
                fontFamily: initialState.fontFamily
            };
        case ADD_FONT_FAMILY:
            fonts.map((font, index) => {
                if (font === action.fontFamily) {
                    fonts.splice(index, 1);
                }
            });
            fonts.push(action.fontFamily);
            return {
                ...state,
                fontFamily: action.fontFamily
            };
        case UPDATE_STYLE:
            // let data = state;
            // Object.keys(initialState).map((key, index) => {
            //     if (key === action.key) {
            //         data = {
            //             ...state,
            //             [action.key]: action.val
            //         };
            //     }
            // });
            // return data;
            return {
                ...state,
                [action.key]: action.val
            };
        default:
            return state;
    }
};

const resetSettings = () => ({type: RESET_SETTINGS});
const resetFontFamily = () => ({type: RESET_FONT_FAMILY});
const setFontFamily = (fontFamily) => ({type: ADD_FONT_FAMILY, fontFamily});
const setStyle = (key, val) => ({type: UPDATE_STYLE, key, val});

export const refreshSettings = () => (dispatch) => {
    dispatch(resetSettings())
};
export const refreshFontFamily = () => (dispatch) => {
    dispatch(resetFontFamily())
};
export const addFontFamily = (fontFamily) => (dispatch) => {
    dispatch(setFontFamily(fontFamily))
};
export const updateStyle = (key, val) => (dispatch) => {
    dispatch(setStyle(key, val))
};

export default styleReducer;