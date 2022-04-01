import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTitle} from "./utils";
import {FullCardBlock} from "../../components/FullCardBlock/FullCardBlock";
import {fetchHourlyWeatherForecast} from "../../store/reducers/citiesReducer/citiesReducer";
import fullCardPageStyles from './FullCardPage.module.scss';
import cross from '../../img/delete.png';
import {toggleModalFullForecastAction} from "../../store/reducers/modalFullForecastReducer/modalFullForecastReducer";
import {RootState} from "../../store";

export const FullCardPage = () => {
    const currentCityParams = useSelector((state:RootState) => state.citiesReducer.detailedWeatherForecastParams)
    const hourlyWeatherForecast = useSelector((state:RootState)=> state.citiesReducer.currentCityHourlyWeatherForecast)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHourlyWeatherForecast())
    }, [dispatch])
    console.log()
    const closeModal = () =>{
        dispatch(toggleModalFullForecastAction())
    }

    return (
        <div className={fullCardPageStyles.wrapper}>
            <div className={fullCardPageStyles.container}>
                <header className={fullCardPageStyles.header}>
                    <img className={fullCardPageStyles.delete_button} src={cross} alt={'delete_button'}
                         onClick={closeModal}/>
                    <h1 className={fullCardPageStyles.city_name}>{currentCityParams?.cityName}</h1>
                </header>
                <div className={fullCardPageStyles.weather_days}>
                    {hourlyWeatherForecast && Object.keys(hourlyWeatherForecast).map((key, index) => (
                        <FullCardBlock days={hourlyWeatherForecast[key]} key={key} title={getTitle(index)} />
                    ))}
                </div>
            </div>
        </div>
    );
}