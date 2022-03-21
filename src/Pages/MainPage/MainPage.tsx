import mainPageStyles from './MainPage.module.scss';
import {CityCard} from "../../Components/CityCard/CityCard";
import {useSelector} from "react-redux";


export const MainPage = () =>{
    const currentCity = useSelector(state=> state.currentCity)
    console.log(currentCity)
    return(
        <div className={mainPageStyles.wrapper}>
            <div className={mainPageStyles.container}>
                <CityCard currentCity={currentCity}/>
            </div>
        </div>
    );
}