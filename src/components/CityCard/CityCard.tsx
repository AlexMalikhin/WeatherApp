import React, {useCallback, useEffect, useState} from "react";
import {useRef} from "react";
import cityCardStyles from './CityCard.module.scss';
import cross from '../../img/delete.png';
import {useDispatch} from "react-redux";
import {addParamsDetailedWeatherForecast, deleteCityWeather} from "../../store/reducers/citiesReducer/citiesReducer";
import {getImageLink} from "../../utils/utils";
import {translate} from "../../i18n/translate";
import {toggleModalFullForecastAction} from "../../store/reducers/modalFullForecastReducer/modalFullForecastReducer";
import {CityDataProps} from "../../types/types";
import Swipe from "react-easy-swipe";


export const CityCard: React.FC<CityDataProps> = ({cityData}) => {
    const cardRef: any = useRef();
    const dispatch = useDispatch();
    const [coordx, setCoordX] = useState(0)
    const [coordy, setCoordY] = useState(0)
    useEffect(() => {
        const coord = cardRef.current.getBoundingClientRect()
        // console.log(coord)
        setCoordY(coord.top * 0.02)
    }, [])
   const [posY, setPosY] = useState({
       
   })
    useEffect(()=>{
        addEventListener('scroll', ()=>{
            setPosY(window.scrollY)
        })
        console.log(posY)
    },[posY])

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
    const leftLeft = () => {
        const coords = cardRef.current.getBoundingClientRect()
        // setCoordX(coords.left * 8
        console.log(coords)
        if (coords.top > coordy + 10 || coords.top < coordy - 10) {
            setCoordX(coords.left * 8)
        }
        else {
            setCoordX(0)
        }
        // if (coords.left * 3 > 100 && coords.top < coordy + 2 || coords.top > coordy - 2) {
        //     dispatch(deleteCityWeather(cityData.id))
        // }
    }
    const touchEnd = () => {
      setCoordX(0)
    }

    return (
        <>
            {cityData ? <div
                onTouchMove={leftLeft}
                onTouchEnd={touchEnd}
                ref={cardRef}
                className={cityCardStyles.card_wrapper}
                style={{left: `${coordx}px`, top: `${coordy}px`}}
            >
                <div
                    className={cityCardStyles.card_container} onClick={showDetailedWeatherForecast}>
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