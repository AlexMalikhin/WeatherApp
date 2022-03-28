import {CityCard} from "../../Components/CityCard/CityCard";
import {useDispatch, useSelector} from "react-redux";
import {FullCardPage} from "../FullCardPage/FullCardPage";
import {useToggle} from "../../hooks/useToggle";
import mainPageStyles from './MainPage.module.scss';
import ru from '../../img/languages/ru.png';
import en from '../../img/languages/en.png';
import {changeLanguageAction, changeLanguageWeatherData} from "../../store/cityReducer";
import {LOCALES} from "../../i18n";




export const MainPage = () =>{
    const allCities = useSelector(state=> state.allCities)
    const [isFullInfoModal, toggleFullInfoModal] = useToggle(false)
    const dispatch = useDispatch();
    const changeLanguage = (language: string)=>{
        dispatch(changeLanguageAction(language))
        dispatch(changeLanguageWeatherData())
    }


    return(
        <div className={mainPageStyles.wrapper}>
            {isFullInfoModal && <FullCardPage click={toggleFullInfoModal}/>}

            <div className={isFullInfoModal ? mainPageStyles.container_hidden : mainPageStyles.container}>
                <div className={mainPageStyles.language_block}>
                    <img src={ru} className={mainPageStyles.language_img} alt={'ru_icon'} onClick={()=>changeLanguage('ru')}/>
                    <img src={en} className={mainPageStyles.language_img} alt={'en_icon'} onClick={()=>changeLanguage('en')}/>
                </div>
                {allCities.map((currentCity:any)=> <CityCard key={currentCity.id} currentCity={currentCity} click={toggleFullInfoModal}/>)}
            </div>
        </div>
    );
}