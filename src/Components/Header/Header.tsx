import React, {useState} from "react";
import headerStyles from './Header.module.scss';
import {AddressSuggestions} from "react-dadata";
import 'react-dadata/dist/react-dadata.css';
import {useDispatch} from "react-redux";
import {addNewCityCoords, fetchAddedWeatherCity} from "../../store/cityReducer";

export const Header: React.FC = () => {
    const [cityValue, setCityValue] = useState()
    const API_KEY = 'c44d41ee20fa4f7ad65b3bf9df85e7aa2026b8cd'
    const dispatch = useDispatch()

    const handleChange = (e: any) => {
        dispatch(addNewCityCoords(e.data.geo_lat, e.data.geo_lon))
        console.log('e', e.data)
        setCityValue(e)
    }
    const getCityWeather = () => {
        dispatch(fetchAddedWeatherCity())
        setCityValue("");
    }

    return (
        <header className={headerStyles.wrapper}>
            <div className={headerStyles.container}>
                <h1 className={headerStyles.logo_header}>Weather App</h1>
                <div className={headerStyles.searcher_block}>
                    <AddressSuggestions
                        token={API_KEY}
                        inputProps={{placeholder: 'Введите название города...'}}
                        value={cityValue}
                        onChange={handleChange}
                        count={6}
                    />
                    <button onClick={getCityWeather}>Добавить Город</button>
                </div>
            </div>
        </header>
    );
}