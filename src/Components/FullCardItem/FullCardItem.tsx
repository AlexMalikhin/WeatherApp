import React from "react";
import fullCardItem from './FullCardItem.module.scss';

export const FullCardItem: React.FC = () => {
    return (
        <div className={fullCardItem.card_block}>
            <h2 className={fullCardItem.time}>21 марта, 12:00</h2>
            <div className={fullCardItem.weather_report_block}>
                <img className={fullCardItem.weather_image}
                     src={'https://openweathermap.org/img/wn/01d@2x.png'}
                     alt='weather_report_image'/>
                <div className={fullCardItem.weather_celsius}>{35}°C
                </div>
            </div>
            <p className={fullCardItem.weather_description}>Ясно</p>
            <p className={fullCardItem.weather_feel}>Ощущается
                как: {33}°C
            </p>
        </div>
    )
}