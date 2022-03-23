import mainPageStyles from './MainPage.module.scss';
import {CityCard} from "../../Components/CityCard/CityCard";
import {useSelector} from "react-redux";
import {FullCardPage} from "../FullCardPage/FullCardPage";
import {useToggle} from "../../hooks/useToggle";


export const MainPage = () =>{
    const allCities = useSelector(state=> state.allCities)
    const [isFullInfoModal, toggleFullInfoModal] = useToggle(true)

    return(
        <div className={mainPageStyles.wrapper}>
            {isFullInfoModal && <FullCardPage click={toggleFullInfoModal}/>}
            <div className={mainPageStyles.container}>
                {allCities.map((currentCity:any)=> <CityCard key={currentCity.id} currentCity={currentCity} click={toggleFullInfoModal}/>)}
            </div>
        </div>
    );
}