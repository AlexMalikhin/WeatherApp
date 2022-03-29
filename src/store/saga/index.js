import {all} from "redux-saga/effects";
import {
    addedCityWeatherWatcher,
    changeWeatherDataLanguageWatcher,
    currentCityWatcher,
    getHourlyWeatherForecast
} from "./citySaga";

export function* rootWatcher(){
    yield all([currentCityWatcher(), addedCityWeatherWatcher(), getHourlyWeatherForecast(), changeWeatherDataLanguageWatcher()])
}