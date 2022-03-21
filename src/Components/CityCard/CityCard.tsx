import React from "react";
import cityCardStyles from './CityCard.module.scss';
import cloud from '../../img/cloud.png';
import cross from '../../img/delete.png';

export const CityCard: React.FC = () => {
    return (
        <div className={cityCardStyles.card_wrapper}>
        <div className={cityCardStyles.card_container}>
            <img src={cross} className={cityCardStyles.delete_cross} alt='delete button'/>
            <h2 className={cityCardStyles.city_name}>Ростов-на-Дону</h2>
            <p className={cityCardStyles.more_info}>Нажмите для подробного прогноза</p>
            <div className={cityCardStyles.weather_report_block}>
                <img className={cityCardStyles.weather_image} src={cloud} alt='weather report image'/>
                <div className={cityCardStyles.weather_celsius}>3°C</div>
            </div>
            <p className={cityCardStyles.weather_description}>Облачно с прояснениями</p>
            <p className={cityCardStyles.weather_feel}>Ощущается как: 1°C</p>
        </div>
    </div>
    )
}