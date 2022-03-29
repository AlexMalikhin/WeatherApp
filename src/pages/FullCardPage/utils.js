import {translate} from "../../i18n/translate";

export const getTitle = (index) =>{
    switch (index){
        case 0:
            return translate('today')
        case 1:
            return translate('tomorrow')
        default:
            return false
    }
}