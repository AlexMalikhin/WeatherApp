import {useMemo} from "react";
import rainingSkyStyles from './RainingSky.module.scss';
import dark from "../../img/clouds/grey.png";


export const RainingSky = () => {
    const rainDrops = () => {
        const arr = []
        for (let i = 0; i < 1000; i++) {
            arr.push({left: Math.random() * 100, top: -200 + (Math.random() * 300)})
        }
        return arr
    }

    return (
        <div className={rainingSkyStyles.wrapper}>
            {rainDrops().map(rainDrop =>
                <div
                    key={rainDrop.left}
                    className={rainingSkyStyles.water_drop}
                    style={{left: `${rainDrop.left}vw`, top: `${rainDrop.top}vh`}}
                />)
            }
            <img src={dark} className={rainingSkyStyles.cloudOne} alt={'moving grey cloud'}/>
            <img src={dark} className={rainingSkyStyles.cloudTwo} alt={'moving grey cloud'}/>
            <img src={dark} className={rainingSkyStyles.cloudThree} alt={'moving grey cloud'}/>
            <img src={dark} className={rainingSkyStyles.cloudFour} alt={'moving grey cloud'}/>
            <img src={dark} className={rainingSkyStyles.cloudFive} alt={'moving grey cloud'}/>
        </div>
    )
}