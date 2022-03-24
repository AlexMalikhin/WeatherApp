import React from "react";

import {FullCardItem} from "../FullCardItem/FullCardItem";
import fullCardBlockStyles from './FullCardBlock.module.scss';

export const FullCardBlock:React.FC = ({day}: any) =>{
    const title = Object.keys(day)[0]
    const getTitle = (currentObject:any) =>{
        switch (currentObject){
            case 'today':
                return 'Сегодня'
            case 'tomorrow':
                return 'Завтра'
            case 'afterTomorrow':
                return 'Послезавтра'
            default:
                return 'EMPTY'
        }
    }
    return(
      <div className={fullCardBlockStyles.container}>
          {/*<h2 className={fullCardBlockStyles.days_headers}>{2}</h2>*/}
          <div className={fullCardBlockStyles.cards}>
              {day?.[Object.keys(day)[0]]?.map((item)=><FullCardItem key={item.dt} data={item}/>)}
          </div>
      </div>
    );
}