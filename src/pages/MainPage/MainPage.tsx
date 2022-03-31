import {useSelector} from "react-redux";
import {FullCardPage} from "../FullCardPage/FullCardPage";
import {CityCard} from "../../components/CityCard/CityCard";
import {RootState} from "../../store";
import mainPageStyles from './MainPage.module.scss';
import {ClearSky} from "../../components/ClearSky/ClearSky";
import {RainingSky} from "../../components/RainingSky/RainingSky";
import {GreySky} from "../../components/GreySky/GreySky";
import {useTheme} from "./utils";
import {SnowingSky} from "../../components/SnowingSky/SnowingSky";

export const MainPage = () => {
    const {allCities} = useSelector((state: RootState) => state.citiesReducer)
    const {isOpenFullPage} = useSelector((state: RootState) => state.modalFullForecastReducer)
    const {theme} = useTheme()
    console.log(theme)

    return (
        <div className={mainPageStyles.wrapper}>
            {isOpenFullPage && <FullCardPage/>}
            {theme()}
            {/*<SnowingSky/>*/}
            <div className={isOpenFullPage ? mainPageStyles.container_hidden : mainPageStyles.container}>
                {allCities?.map((currentCity: any) => (
                    <CityCard
                        key={currentCity.id}
                        cityData={currentCity}
                    />
                ))}
            </div>
        </div>
    );
}