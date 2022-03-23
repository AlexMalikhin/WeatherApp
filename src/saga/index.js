import {all} from "redux-saga/effects";
import {addedCityWeatherWatcher, currentCityWatcher, getHourlyWeatherForecast} from "./citySaga";

export function* rootWatcher(){
    yield all([currentCityWatcher(), addedCityWeatherWatcher(), getHourlyWeatherForecast()])
}