import mainPageStyles from './MainPage.module.scss'
import {CityCard} from "../../Components/CityCard/CityCard";

export const MainPage = () =>{
    return(
        <div className={mainPageStyles.wrapper}>
            <div className={mainPageStyles.container}>
                <CityCard/>
                <CityCard/>
                <CityCard/>
            </div>
        </div>
    );
}