import {put, takeEvery, call, select} from 'redux-saga/effects';
import {addWeatherNewCity, FETCH_CURRENT_WEATHER_CITY, FETCH_ADDED_WEATHER_CITY, FETCH_HOURLY_WEATHER_FORECAST} from "../store/cityReducer";
import {weatherAPI, geoLocateAPI} from "../api";

const getUserLocation = () =>new Promise((resolve, reject)=>{
    navigator.geolocation.getCurrentPosition(location=>resolve(location), error=> reject(error),)
})

function* fetchCurrentCityWorker(){
    // const location = yield call(getUserLocation)
    // const {latitude, longitude} = location.coords
    // const data = yield call(()=>weatherAPI.byCoord(latitude, longitude))

    const currentLocation = yield call(()=>geoLocateAPI.getLocate('c44d41ee20fa4f7ad65b3bf9df85e7aa2026b8cd'))
    const {geo_lat, geo_lon} = currentLocation.data.location.data
    const data = yield call(()=>weatherAPI.byCoord(geo_lat, geo_lon))
    yield put(addWeatherNewCity(data.data))
}

function* fetchAddedWeatherCityWorker(){
    const store = yield select()
    const data = yield call(()=>weatherAPI.byCoord(store.newCityCoords.latitude, store.newCityCoords.longitude))
    yield put(addWeatherNewCity(data.data))
}

function* fetchHourlyWeatherForecastWorker(){
    const store = yield select()
    const {lat, lon} = store.detailedWeatherForecastParams.coords
    yield call(()=>console.log(lat, lon))
}

export function* addedCityWeatherWatcher(){
    yield takeEvery(FETCH_ADDED_WEATHER_CITY, fetchAddedWeatherCityWorker)
}

export function* currentCityWatcher(){
    yield takeEvery(FETCH_CURRENT_WEATHER_CITY, fetchCurrentCityWorker)
}

export function* getHourlyWeatherForecast(){
    yield takeEvery(FETCH_HOURLY_WEATHER_FORECAST, fetchHourlyWeatherForecastWorker)
}