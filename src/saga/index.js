import {all} from "redux-saga/effects";
import {addedCityWeatherWatcher, currentCityWatcher} from "./citySaga";

export function* rootWatcher(){
    yield all([currentCityWatcher(), addedCityWeatherWatcher()])
}