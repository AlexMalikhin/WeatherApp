import React from "react";
import {FullCardItem} from "../FullCardItem/FullCardItem";
import fullCardBlockStyles from './FullCardBlock.module.scss';
import moment from "moment";

    export const FullCardBlock:React.FC = ({days, title}) =>{
        console.log()
        return(
            <div className={fullCardBlockStyles.container}>
                <h2 className={fullCardBlockStyles.days_headers}>{title ? title : moment(days[0].dt * 1000).format('MMMM Do')}</h2>

                <div className={fullCardBlockStyles.cards}>
                    {days.map((item:any)=><FullCardItem data={item} key={item.dt}/>)}
                </div>
            </div>
        );
    }