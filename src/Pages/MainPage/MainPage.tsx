import mainPageStyles from './MainPage.module.scss';
import {CityCard} from "../../Components/CityCard/CityCard";
import {useSelector} from "react-redux";


export const MainPage = () =>{
    const allCities = useSelector(state=> state.allCities)

    return(
        <div className={mainPageStyles.wrapper}>
            <div className={mainPageStyles.container}>
                {allCities.map((currentCity:any)=> <CityCard key={currentCity.id} currentCity={currentCity}/>)}
            </div>
        </div>
    );
}