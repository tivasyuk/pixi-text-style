const UPDATE_SETTINGS = "UPDATE_SETTINGS";

export const THEME_DARK = "THEME_DARK";
export const THEME_LIGHT = "THEME_LIGHT";

export const MENU_RIGHT = "navRight";
export const MENU_LEFT = "navLeft";

let initialState = {
    navOpen: true,
    navPosition: MENU_RIGHT,
    themeColor: THEME_DARK,
    catLoverTheme: false,

    bgImage: '',
    bgPosX: 0,
    bgPosY: 0,
    bgSize: 'cover',

    previewWidth: 600,
    canvasPosX: 50,
    canvasPosY: 50,

    moveCanvas: true
};

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SETTINGS:
            return {
                ...state,
                [action.id]: action.value
            };
        default:
            return state;
    }
};

const setSetting = (id, value) => ({type: UPDATE_SETTINGS, id, value});

export const updateSetting = (id, value) => (dispatch) => {
    dispatch(setSetting(id, value))
};

export default settingsReducer;