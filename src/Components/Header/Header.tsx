import React from "react";
import headerStyles from './Header.module.scss';

export const Header: React.FC = () =>{
    return(
        <header className={headerStyles.wrapper}>
            <div className={headerStyles.container}>
                <h1 className={headerStyles.logo_header}>Weather App</h1>
                <input className={headerStyles.input} placeholder='Введите название города...'/>
            </div>
        </header>
    );
}