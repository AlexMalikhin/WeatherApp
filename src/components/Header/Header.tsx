import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {AddressSuggestions} from "react-dadata";
import {addNewCityCoords, fetchAddedWeatherCity} from "../../store/reducers/citiesReducer/citiesReducer";
import {translate} from "../../i18n/translate";
import headerStyles from './Header.module.scss';
import 'react-dadata/dist/react-dadata.css';
import {useIntl} from "react-intl";

export const Header: React.FC = () => {
    const [cityValue, setCityValue] = useState()
    const API_KEY = 'c44d41ee20fa4f7ad65b3bf9df85e7aa2026b8cd'
    const dispatch = useDispatch()

    // @ts-ignore
    const handleChange = (e: any) => {
        dispatch(addNewCityCoords(e.data.geo_lat, e.data.geo_lon))
        console.log('e', e.data)
        setCityValue(e)
    }
    const getCityWeather = () => {
        dispatch(fetchAddedWeatherCity())
        setCityValue(undefined);
    }
    const intl = useIntl()

    // @ts-ignore
    return (
        <header className={headerStyles.wrapper}>
            <div className={headerStyles.container}>
                <h1 className={headerStyles.logo_header}>{translate('title')}</h1>
                <div className={headerStyles.searcher_block}>
                    <AddressSuggestions
                        token={API_KEY}
                        inputProps={{placeholder: `${intl.formatMessage({id: 'placeholder'})}`, className: headerStyles.input_autocomplete}}
                        value={cityValue}
                        onChange={handleChange}
                        count={3}
                        containerClassName={headerStyles.container_autocomplete}
                        suggestionClassName={headerStyles.suggestion}
                        currentSuggestionClassName={headerStyles.current_suggestion}
                        // hintClassName={headerStyles.hint}
                        // highlightClassName={headerStyles.highlight}
                    />
                    <button className={headerStyles.add_city_button} onClick={getCityWeather}>{translate('button')}</button>
                </div>
            </div>
        </header>
    );
}