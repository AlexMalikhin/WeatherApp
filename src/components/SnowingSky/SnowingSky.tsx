import snowingSkyStyles from './SnowingSky.module.scss';
import {Snow} from "../Snow/Snow";
import {useMemo} from "react";
import cloudBack from '../../img/themeWeather/greySky/cloud1.png';
import cloudTwo from '../../img/themeWeather/clearSky/cloud1.png';
import cloudThree from '../../img/themeWeather/clearSky/cloud2.png';
import cloud from '../../img/themeWeather/greySky/cloud3.png';


export const SnowingSky = () => {
    const snowFall = () => {
        const arr = []
        for (let i = 0; i < 100; i++) {
            const leftPosition = Math.random() * 100
            arr.push({
                randomAnimation: 5 + (Math.random() * 10),
                randomSize: Math.random(),
                topPosition: -200 + (Math.random() * 200),
                bottomPosition: 200 + (Math.random() * 50),
                leftPosition,
                leftDeviation: leftPosition + (-50 + (Math.random() * 100))
            })
        }
        return arr
    }



    return (
        <div className={snowingSkyStyles.wrapper}>
            <img className={snowingSkyStyles.clouds_back} src={cloudBack} alt={'clouds back'}/>
            <img className={snowingSkyStyles.cloudOne} src={cloudThree} alt={'cloud'}/>
            <img className={snowingSkyStyles.cloudTwo} src={cloudTwo} alt={'cloud'}/>
            {snowFall().map((item) => (
                <Snow
                    randomSize={item.randomSize}
                    topPosition={item.topPosition}
                    bottomPosition={item.bottomPosition}
                    leftPosition={item.leftPosition}
                    randomAnimation={item.randomAnimation}
                    leftDeviation={item.leftDeviation}
                />))
            }
        </div>
    )
}