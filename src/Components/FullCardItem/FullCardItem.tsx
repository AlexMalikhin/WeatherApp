import React from "react";
import fullCardItem from './FullCardItem.module.scss';
import moment from "moment";

export const FullCardItem: React.FC = ({data}) => {
    // console.log(data.dt_txt)
    console.log()
    return (
        <div className={fullCardItem.card_block}>
            <h2 className={fullCardItem.time}>{data?.dt_txt.slice(8,10)} {moment((data.dt  * 1000) + 20000).format("MMMM")}, {data?.dt_txt.slice(10, 16)}</h2>
            <div className={fullCardItem.weather_report_block}>
                <img className={fullCardItem.weather_image}
                     src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                     alt='weather_report_image'/>
                <div className={fullCardItem.weather_celsius}>{Math.round(data?.main.temp)}°C
                </div>
            </div>
            <p className={fullCardItem.weather_description}>{data.weather[0].description}</p>
            <p className={fullCardItem.weather_feel}>Ощущается
                как: {Math.round(data?.main.feels_like)}°C
            </p>
        </div>
    )
}