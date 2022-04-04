import {ThemeReducerState} from "./types";

const defaultTheme: ThemeReducerState = {
    currentTheme: null
}

const CHANGE_THEME = 'CHANGE_THEME';

export const themeReducer = (state = defaultTheme, action: any) =>{
    switch (action.type) {
        case CHANGE_THEME:
            return {...state, currentTheme: action.payload}
        default:
            return state
    }
}

export const changeThemeAction = (theme: any)=> ({type: CHANGE_THEME, payload: theme})