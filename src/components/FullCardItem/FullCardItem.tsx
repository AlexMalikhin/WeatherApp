import React from "react";
import fullCardItem from './FullCardItem.module.scss';
import {translate} from "../../i18n/translate";
import {getDay, getMonth, getTime} from "../../utils/utils";
import {getImageLink} from "../../utils/utils";
import {CityDataProps} from "../../types/types";

export const FullCardItem: React.FC<CityDataProps> = ({cityData}) => {

    return (
        <div className={fullCardItem.card_block}>
            <h2 className={fullCardItem.time}>{getDay(cityData)} {getMonth(cityData)} {getTime(cityData)}</h2>
            <div className={fullCardItem.weather_report_block}>
                <img
                    className={fullCardItem.weather_image}
                    src={getImageLink(cityData.weather[0].icon)}
                    alt='weather_report_image'
                />
                <div className={fullCardItem.weather_celsius}>{Math.round(cityData?.main.temp)}°C
                </div>
            </div>
            <p className={fullCardItem.weather_description}>{cityData.weather[0].description}</p>
            <p className={fullCardItem.weather_feel}>{translate('feels_like')}
                : {Math.round(cityData?.main.feels_like)}°C
            </p>
        </div>
    )
}