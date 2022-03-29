import React from "react";
import {useDispatch} from "react-redux";
import {changeLanguageWeatherData} from "../../store/reducers/citiesReducer/citiesReducer";
import {changeLanguageAction} from "../../store/reducers/languageReducer/languageReducer";
import {LanguageItemProps} from "../LanguagesBlock/types";
import languageItemStyles from "./LanguageItem.module.scss";


export const LanguageItem: React.FC<LanguageItemProps> = (props) =>{
    const {img, alt, language} = props
    const dispatch = useDispatch()
    const changeLanguage = (language: string) => {
        dispatch(changeLanguageAction(language))
        dispatch(changeLanguageWeatherData())
    }

    return(
        <img
            src={img}
            className={languageItemStyles.language_img}
            alt={alt}
            onClick={()=>changeLanguage(language)}
        />
    )
}