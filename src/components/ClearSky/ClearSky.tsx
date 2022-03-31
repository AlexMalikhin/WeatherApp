import clearSkyStyles from "./ClearSky.module.scss";
import cloudOne from '../../img/themeWeather/clearSky/cloud1.png';
import cloudThree from '../../img/themeWeather/clearSky/cloud2.png';
import cloudFour from '../../img/themeWeather/clearSky/cloud3.png';
import sun from '../../img/themeWeather/clearSky/sun.png';

export const ClearSky = () => {
    return (
        <div className={clearSkyStyles.wrapper}>
            <img src={cloudOne} className={clearSkyStyles.cloudOne} alt={'moving cloud parallax'}/>
            <img src={cloudOne} className={clearSkyStyles.cloudTwo} alt={'moving cloud parallax'}/>
            <img src={cloudThree} className={clearSkyStyles.cloudThree} alt={'moving cloud parallax'}/>
            <img src={cloudFour} className={clearSkyStyles.cloudFour} alt={'moving cloud parallax'}/>
            <img src={cloudFour} className={clearSkyStyles.cloudFive} alt={'moving cloud parallax'}/>
            <img src={sun} className={clearSkyStyles.sun} alt={'sun'}/>
        </div>
    )
}