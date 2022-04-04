import {LOCALES} from "../../../i18n";

const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

const defaultState = {
    language: LOCALES.RUSSIAN
}

export const languageReducer = (state = defaultState, action: any) =>{
    switch (action.type){
        case CHANGE_LANGUAGE:
            return {...state, language: action.payload}
        default:
            return state
    }
}

export const changeLanguageAction = (payload: any) =>({type: CHANGE_LANGUAGE, payload})