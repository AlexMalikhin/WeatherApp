import React from "react";
import cityCardStyles from './CityCard.module.scss';
import cross from '../../img/cloud.png';
import {useDispatch} from "react-redux";
import {addParamsDetailedWeatherForecast, deleteCityWeather} from "../../store/cityReducer";
import {getImageLink} from "./utils";

export const CityCard: React.FC = ({currentCity, click}: any) => {
    const dispatch = useDispatch()

    const deleteCity = () =>{
        dispatch(deleteCityWeather(currentCity.id))
        click.toggle()
    }
    const showDetailedWeatherForecast = () =>{
        click.toggle()
        dispatch(addParamsDetailedWeatherForecast({lat: currentCity?.coord.lat, lon: currentCity?.coord.lon}, currentCity?.name))
    }

    return (
        <>
            {currentCity ? <div className={cityCardStyles.card_wrapper}>
                <div className={cityCardStyles.card_container} onClick={showDetailedWeatherForecast}>
                    <img src={cross} onClick={deleteCity}
                         className={cityCardStyles.delete_cross} alt='delete button'/>
                    <h2 className={cityCardStyles.city_name}>{currentCity?.name}</h2>
                    <p className={cityCardStyles.more_info}>Нажмите для подробного прогноза</p>
                    <div className={cityCardStyles.weather_report_block}>
                        <img className={cityCardStyles.weather_image} src={getImageLink(currentCity?.weather[0]?.icon)}
                             alt='weather_report_image'/>
                        <div className={cityCardStyles.weather_celsius}>{Math.round(currentCity?.main.temp)}°C</div>
                    </div>
                    <p className={cityCardStyles.weather_description}>{currentCity?.weather[0].description}</p>
                    <p className={cityCardStyles.weather_feel}>Ощущается
                        как: {Math.round(currentCity?.main.feels_like)}°C</p>
                </div>
            </div> : <></>
            }
        </>
    );
}