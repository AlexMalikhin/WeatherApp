import React from "react";
import cityCardStyles from './CityCard.module.scss';
import cross from '../../img/delete.png';
import {useDispatch} from "react-redux";
import {addParamsDetailedWeatherForecast, deleteCityWeather} from "../../store/reducers/citiesReducer/citiesReducer";
import {getImageLink} from "../../utils/utils";
import {translate} from "../../i18n/translate";
import {toggleModalFullForecastAction} from "../../store/reducers/modalFullForecastReducer/modalFullForecastReducer";
import {CityDataProps} from "../../types/types";



export const CityCard: React.FC<CityDataProps> = ({cityData}) => {
    const dispatch = useDispatch()

    const deleteCity = () => {
        dispatch(deleteCityWeather(cityData.id))
        dispatch(toggleModalFullForecastAction())
    }
    const showDetailedWeatherForecast = () => {
        dispatch(toggleModalFullForecastAction())
        dispatch(addParamsDetailedWeatherForecast({
            lat: cityData?.coord.lat,
            lon: cityData?.coord.lon
        }, cityData?.name))
    }

    return (
        <>
            {cityData ? <div className={cityCardStyles.card_wrapper}>
                <div className={cityCardStyles.card_container} onClick={showDetailedWeatherForecast}>
                    <img
                        src={cross}
                        onClick={deleteCity}
                        className={cityCardStyles.delete_cross}
                        alt='delete button'
                    />
                    <h2 className={cityCardStyles.city_name}>{cityData?.name}</h2>
                    <p className={cityCardStyles.more_info}>{translate('more')}</p>
                    <div className={cityCardStyles.weather_report_block}>
                        <img
                            className={cityCardStyles.weather_image}
                            src={getImageLink(cityData?.weather[0]?.icon)}
                            alt='weather_report_image'
                        />
                        <div className={cityCardStyles.weather_celsius}>{Math.round(cityData?.main.temp)}°C</div>
                    </div>
                    <p className={cityCardStyles.weather_description}>{cityData?.weather[0].description}</p>
                    <p className={cityCardStyles.weather_feel}>{translate('feels_like')}
                        : {Math.round(cityData?.main.feels_like)}°C</p>
                </div>
            </div> : <></>
            }
        </>
    );
}