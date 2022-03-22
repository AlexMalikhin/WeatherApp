import fullCardPageStyles from './FullCardPage.module.scss';
import cross from '../../img/delete.png';

export const FullCardPage = () => {
    return (
        <div className={fullCardPageStyles.wrapper}>
            <div className={fullCardPageStyles.container}>
                <img className={fullCardPageStyles.delete_button} src={cross} alt={'delete_button'}/>
                <h1 className={fullCardPageStyles.city_name}>Ростов-на-Дону</h1>
                <div className={fullCardPageStyles.weather_days}>
                    <h2 className={fullCardPageStyles.days_headers}>Сегодня</h2>
                    <div className={fullCardPageStyles.cards}>
                        <div className={fullCardPageStyles.card_block}>d</div>
                        <div className={fullCardPageStyles.card_block}>d</div>
                        <div className={fullCardPageStyles.card_block}>d</div>
                        <div className={fullCardPageStyles.card_block}>d</div>
                    </div>
                    <h2 className={fullCardPageStyles.days_headers}>Завтра</h2>
                    <div>

                    </div>
                    <h2 className={fullCardPageStyles.days_headers}>23 Марта</h2>
                    <div>

                    </div>
                </div>
            </div>
        </div>);
}