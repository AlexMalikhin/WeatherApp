import {LanguageItem} from "../LanguageItem/LanguageItem";
import ru from '../../img/languages/ru.png';
import en from '../../img/languages/en.png';
import languageBlockStyles from "./LanguageBlock.module.scss";

export const LanguageBlock = () =>{
    return(
        <div className={languageBlockStyles.language_block}>
            <LanguageItem img={ru} alt={'ru_icon'} language={'ru'}/>
            <LanguageItem img={en} alt={'en_icon'} language={'en'}/>
        </div>
    )
}