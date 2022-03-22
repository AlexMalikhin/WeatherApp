import {put, takeEvery, call, select} from 'redux-saga/effects';
import {addWeatherNewCity, FETCH_CURRENT_WEATHER_CITY, FETCH_ADDED_WEATHER_CITY} from "../store/cityReducer";
import {weatherAPI} from "../api";

const getUserLocation = () =>new Promise((resolve, reject)=>{
    navigator.geolocation.getCurrentPosition(location=>resolve(location), error=> reject(error),)
})

function* fetchCurrentCityWorker(){
    const location = yield call(getUserLocation)
    const {latitude, longitude} = location.coords
    const data = yield call(()=>weatherAPI.byCoord(latitude, longitude))
    yield put(addWeatherNewCity(data.data))
    let proj = yield select()
    yield call(()=>console.log(proj.newCityCoords))
}

function* fetchAddedWeatherCityWorker(){
    let store = yield select()
    const data = yield call(()=>weatherAPI.byCoord(store.newCityCoords.latitude, store.newCityCoords.longitude))
    yield put(addWeatherNewCity(data.data))

}
export function* addedCityWeatherWatcher(){
    yield takeEvery(FETCH_ADDED_WEATHER_CITY, fetchAddedWeatherCityWorker)
}

export function* currentCityWatcher(){
    yield takeEvery(FETCH_CURRENT_WEATHER_CITY, fetchCurrentCityWorker)
}