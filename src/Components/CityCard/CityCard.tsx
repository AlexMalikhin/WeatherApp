import React from "react";
import cityCardStyles from './CityCard.module.scss';
import cross from '../../img/delete.png';
import {useDispatch} from "react-redux";
import {deleteCityWeather} from "../../store/cityReducer";

export const CityCard: React.FC = ({currentCity}: any) => {
    const dispatch = useDispatch()
    const getImageLink = (iconId: any) => {
        return `https://openweathermap.org/img/wn/${iconId}@2x.png`
    }
    // console.log(Date.now())
    return (
        <>
            {currentCity ? <div className={cityCardStyles.card_wrapper}>
                <div className={cityCardStyles.card_container}>
                    <img src={cross} onClick={() => dispatch(deleteCityWeather(currentCity.id))}
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