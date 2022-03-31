import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {ClearSky} from "../../components/ClearSky/ClearSky";
import {GreySky} from "../../components/GreySky/GreySky";
import {SnowingSky} from "../../components/SnowingSky/SnowingSky";
import {RainingSky} from "../../components/RainingSky/RainingSky";

export const useTheme = () =>{
    const {currentTheme} = useSelector((state: RootState)=>state.themeReducer);
    switch (currentTheme){
        case 600:
            return {theme: SnowingSky}
        case 601:
            return {theme: SnowingSky}
        case 804:
            return {theme: GreySky}
        case 803:
            return {theme: GreySky}
        case 800:
            return {theme: ClearSky}
        case 500:
            return {theme: RainingSky}
        default:
            return {theme: GreySky}
    }
}