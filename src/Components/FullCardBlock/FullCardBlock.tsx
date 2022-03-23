import React from "react";
import {FullCardItem} from "../FullCardItem/FullCardItem";
import fullCardBlockStyles from './FullCardBlock.module.scss';

export const FullCardBlock:React.FC = ({title}: any) =>{
    return(
      <div className={fullCardBlockStyles.container}>
          <h2 className={fullCardBlockStyles.days_headers}>{title}</h2>
          <div className={fullCardBlockStyles.cards}>
              <FullCardItem/>
              <FullCardItem/>
              <FullCardItem/>
              <FullCardItem/>
          </div>
      </div>
    );
}