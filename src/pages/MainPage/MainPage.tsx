import {useSelector} from "react-redux";
import {FullCardPage} from "../FullCardPage/FullCardPage";
import {CityCard} from "../../components/CityCard/CityCard";
import {RootState} from "../../store";
import mainPageStyles from './MainPage.module.scss';

export const MainPage = () =>{
    const {allCities} = useSelector((state:RootState)=> state.citiesReducer)
    const {isOpenFullPage} = useSelector((state:RootState)=>state.modalFullForecastReducer)

    return(
        <div className={mainPageStyles.wrapper}>
            {isOpenFullPage && <FullCardPage />}
            <div className={isOpenFullPage ? mainPageStyles.container_hidden : mainPageStyles.container}>
                {allCities?.map((currentCity:any)=>(
                    <CityCard
                        key={currentCity.id}
                        cityData={currentCity}
                    />
                ))}
            </div>
        </div>
    );
}