import React, {useEffect} from "react";
import moment from "moment";
import {FullCardBlock} from "../../Components/FullCardBlock/FullCardBlock";
import fullCardPageStyles from './FullCardPage.module.scss';
import cross from '../../img/delete.png';
import {useDispatch, useSelector} from "react-redux";
import {fetchHourlyWeatherForecast} from "../../store/cityReducer";

export const FullCardPage = ({click}: any) => {
    const currentCityParams = useSelector(state=>state.detailedWeatherForecastParams)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchHourlyWeatherForecast)
    },[dispatch])

    return (
        <div className={fullCardPageStyles.wrapper}>
            <div className={fullCardPageStyles.container}>
                <img className={fullCardPageStyles.delete_button} src={cross} alt={'delete_button'}
                     onClick={click.toggle}/>
                <h1 className={fullCardPageStyles.city_name}>{currentCityParams.cityName}</h1>
                <div className={fullCardPageStyles.weather_days}>
                    <FullCardBlock title={'Сегодня'}/>
                    <FullCardBlock title={'Завтра'}/>
                    <FullCardBlock title={moment().format("Do MMM")}/>
                </div>
            </div>
        </div>);
}