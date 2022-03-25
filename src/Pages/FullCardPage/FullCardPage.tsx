import React, {useEffect} from "react";
import {FullCardBlock} from "../../Components/FullCardBlock/FullCardBlock";
import fullCardPageStyles from './FullCardPage.module.scss';
import cross from '../../img/delete.png';
import {useDispatch, useSelector} from "react-redux";
import {fetchHourlyWeatherForecast} from "../../store/cityReducer";

export const FullCardPage = ({click}: any) => {
    const currentCityParams = useSelector(state => state.detailedWeatherForecastParams)
    const hourlyWeatherForecast = useSelector(state => state.currentCityHourlyWeatherForecast)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHourlyWeatherForecast())
    }, [dispatch])
    console.log()
    const getTitle = (index:any, key: any) =>{
        switch (index){
            case 0:
                return 'Сегодня'
            case 1:
                return 'Завтра'
            default:
                return false
        }
    }
    return (
        <div className={fullCardPageStyles.wrapper}>
            <div className={fullCardPageStyles.container}>
                <header className={fullCardPageStyles.header}>
                    <img className={fullCardPageStyles.delete_button} src={cross} alt={'delete_button'}
                         onClick={click.toggle}/>
                    <h1 className={fullCardPageStyles.city_name}>{currentCityParams.cityName}</h1>
                </header>
                <div className={fullCardPageStyles.weather_days}>
                    {hourlyWeatherForecast && Object.keys(hourlyWeatherForecast).map((key, index) => (
                        <FullCardBlock days={hourlyWeatherForecast[key]} key={key} title={getTitle(index, key)} />
                    ))}
                </div>
            </div>
        </div>
    );
}