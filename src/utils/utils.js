import {translate} from "../i18n/translate";

export const getMonth = (data) =>{
    const numberOfMonth = new Date(data.dt * 1000).getMonth() + 1
    const currentMonth = translate('months', numberOfMonth)
    return currentMonth
}
export const getTime = (data) =>{
    const currentTime = data?.dt_txt.slice(10, 16)
    return currentTime
}
export const getDay = (data) =>{
    const currentDay = data?.dt_txt.slice(8,10)
    return currentDay
}
export const getImageLink = (iconId) => {
    return `https://openweathermap.org/img/wn/${iconId}@2x.png`
}
