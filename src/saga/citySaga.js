import {put, takeEvery, call} from 'redux-saga/effects';
import {setCurrentCity, FETCH_CURRENT_CITY_WEATHER} from "../store/cityReducer";
import {weatherAPI} from "../api";

const getUserLocation = () =>new Promise((resolve, reject)=>{
    navigator.geolocation.getCurrentPosition(location=>resolve(location), error=> reject(error),)
})

function* fetchCurrentCityWorker(){
    const location = yield call(getUserLocation)
    const {latitude, longitude} = location.coords
    const data = yield call(()=>weatherAPI.byCoord(latitude, longitude))
    yield put(setCurrentCity(data.data))
}

export function* currentCityWatcher(){
    yield takeEvery(FETCH_CURRENT_CITY_WEATHER, fetchCurrentCityWorker)
}