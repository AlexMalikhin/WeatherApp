import fullCardPageStyles from './FullCardPage.module.scss';
import cross from '../../img/delete.png';
import cityCardStyles from "../../Components/CityCard/CityCard.module.scss";
import React from "react";
import {FullCardItem} from "../../Components/FullCardItem/FullCardItem";
import {FullCardBlock} from "../../Components/FullCardBlock/FullCardBlock";

export const FullCardPage = ({click}: any) => {
    return (
        <div className={fullCardPageStyles.wrapper}>
            <div className={fullCardPageStyles.container}>
                <img className={fullCardPageStyles.delete_button} src={cross} alt={'delete_button'}
                     onClick={click.toggle}/>
                <h1 className={fullCardPageStyles.city_name}>Ростов-на-Дону</h1>
                <div className={fullCardPageStyles.weather_days}>
                    <FullCardBlock title={'Сегодня'}/>
                    <FullCardBlock title={'Завтра'}/>
                    <FullCardBlock title={'23 марта'}/>
                </div>
            </div>
        </div>);
}