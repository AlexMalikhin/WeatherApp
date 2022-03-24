import {CityCard} from "../../Components/CityCard/CityCard";
import {useSelector} from "react-redux";
import {FullCardPage} from "../FullCardPage/FullCardPage";
import {useToggle} from "../../hooks/useToggle";
import mainPageStyles from './MainPage.module.scss';


export const MainPage = () =>{
    const allCities = useSelector(state=> state.allCities)
    const [isFullInfoModal, toggleFullInfoModal] = useToggle(false)

    return(
        <div className={mainPageStyles.wrapper}>
            {isFullInfoModal && <FullCardPage click={toggleFullInfoModal}/>}
            <div className={isFullInfoModal ? mainPageStyles.container_hidden : mainPageStyles.container}>
                {allCities.map((currentCity:any)=> <CityCard key={currentCity.id} currentCity={currentCity} click={toggleFullInfoModal}/>)}
            </div>
        </div>
    );
}