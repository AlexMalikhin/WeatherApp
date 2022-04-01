import React from "react";
import {FullCardItem} from "../FullCardItem/FullCardItem";
import fullCardBlockStyles from './FullCardBlock.module.scss';
import {translate} from "../../i18n/translate";
import {CityData} from "../../types/types";

interface FullCardBlockProps  {
    title: any,
    days: CityData[]
}

export const FullCardBlock: React.FC<FullCardBlockProps> = ({days, title}) => {
    const currentMonth = new Date(days[0].dt * 1000).getMonth() + 1
    console.log(days)
    return (
        <div className={fullCardBlockStyles.container}>
            <h2 className={fullCardBlockStyles.days_headers}>{title ? title : translate('months', currentMonth)} {!title && days[0].dt_txt?.slice(8,10)}</h2>
            <div className={fullCardBlockStyles.cards}>
                {days.map((item: any) => <FullCardItem cityData={item} key={item.dt}/>)}
            </div>
        </div>
    );
}