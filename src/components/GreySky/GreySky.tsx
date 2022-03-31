import greySkyStyles from './GreySky.module.scss';
import cloudsBack from '../../img/themeWeather/greySky/cloud1.png';
import cloudTwo from '../../img/themeWeather/greySky/cloud2.png';
import cloudThree from '../../img/themeWeather/greySky/cloud3.png';
import cloudFour from '../../img/themeWeather/greySky/cloud4.png';

export const GreySky = () =>{
    return(
        <div className={greySkyStyles.wrapper}>
            <img src={cloudsBack} className={greySkyStyles.clouds_back} alt={'moving grey cloud'}/>
            <img src={cloudTwo} className={greySkyStyles.cloudTwo} alt={'moving grey cloud'}/>
            <img src={cloudThree} className={greySkyStyles.cloudThree} alt={'moving grey cloud'}/>
            <img src={cloudFour} className={greySkyStyles.cloudFour} alt={'moving grey cloud'}/>
            <img src={cloudTwo} className={greySkyStyles.cloudFive} alt={'moving grey cloud'}/>
        </div>
    )
}