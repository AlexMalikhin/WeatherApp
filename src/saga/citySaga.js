import {put, takeEvery, call, select} from 'redux-saga/effects';
import {addWeatherNewCity, FETCH_CURRENT_WEATHER_CITY, FETCH_ADDED_WEATHER_CITY} from "../store/cityReducer";
import {weatherAPI, geoLocateAPI} from "../api";

function* fetchCurrentCityWorker(){
    const currentLocation = yield call(()=>geoLocateAPI.getLocate('c44d41ee20fa4f7ad65b3bf9df85e7aa2026b8cd'))
    const {geo_lat, geo_lon} = currentLocation.data.location.data
    const data = yield call(()=>weatherAPI.byCoord(geo_lat, geo_lon))
    yield put(addWeatherNewCity(data.data))
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