import cloudOne from '../../img/clouds/1.png';
import cloudThree from '../../img/clouds/3.png';
import cloudFour from '../../img/clouds/4.png';
import backgroundStyles from './ParallaxBackground.module.scss';
import sun from '../../img/clouds/sun3.png';
import rainSky from '../../img/clouds/rainsky.jpg';
import {useMemo} from "react";
import dark from "../../img/clouds/darkcloud.png";

export const ParallaxBackground = () => {
    const rainDrops = useMemo(() => {
        const arr = []
        for (let i = 0; i < 1000; i++) {
            arr.push({left: Math.random() * 100, top: -200 + (Math.random() * 300)})
        }
        return arr
    }, [])

    return (
        <div className={backgroundStyles.wrapper}>
            {/*{rainDrops.map(rainDrop =>*/}
            {/*    <div*/}
            {/*        key={rainDrop.left}*/}
            {/*        className={backgroundStyles.water_drop}*/}
            {/*        style={{left: `${rainDrop.left}vw`, top: `${rainDrop.top}vh`}}/>*/}
            {/*    )*/}
            {/*}*/}

            <img src={cloudOne} className={backgroundStyles.cloudOne}/>
            <img src={cloudOne} className={backgroundStyles.cloudTwo}/>
            <img src={cloudThree} className={backgroundStyles.cloudThree}/>
            <img src={cloudFour} className={backgroundStyles.cloudFour}/>
            <img src={cloudFour} className={backgroundStyles.cloudFive}/>
            <img src={sun} className={backgroundStyles.sun}/>
            {/*<img src={dark} className={backgroundStyles.cloudOne}/>*/}
            {/*<img src={dark} className={backgroundStyles.cloudTwo}/>*/}
            {/*<img src={dark} className={backgroundStyles.cloudThree}/>*/}
            {/*<img src={dark} className={backgroundStyles.cloudFour}/>*/}
            {/*<img src={dark} className={backgroundStyles.cloudFive}/>*/}
        </div>
    )
}