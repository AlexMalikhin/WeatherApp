import React from "react";
import {FullCardItem} from "../FullCardItem/FullCardItem";
import fullCardBlockStyles from './FullCardBlock.module.scss';
import moment from "moment";
import {translate} from "../../i18n/translate";

export const FullCardBlock: React.FC = ({days, title}) => {
    const date = new Date(days[0].dt * 1000).getMonth() + 1
    console.log()
    const getMonthName = (month: number) => {
        switch (month) {
            case 1:
                return translate(`months`, month)
            case 2:
                return translate(`months`, month)
            case 3:
                return translate(`months`, month)
            case 4:
                return translate(`months`, month)
            case 5:
                return translate(`months`, month)
            case 6:
                return translate(`months`, month)
            case 7:
                return translate(`months`, month)
            case 8:
                return translate(`months`, month)
            case 9:
                return translate(`months`, month)
            case 10:
                return translate(`months`, month)
            case 11:
                return translate(`months`, month)
            case 12:
                return translate(`months`, month)
            default:
                return false
        }
    }

    return (
        <div className={fullCardBlockStyles.container}>
            <h2 className={fullCardBlockStyles.days_headers}>{title ? title : getMonthName(new Date(days[0].dt * 1000).getMonth() + 1)} {!title && days[0].dt_txt.slice(8,10)}</h2>
            <div className={fullCardBlockStyles.cards}>
                {days.map((item: any) => <FullCardItem data={item} key={item.dt}/>)}
            </div>
        </div>
    );
}