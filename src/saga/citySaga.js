import {put, takeEvery, call} from 'redux-saga/effects';
import {setCurrentCity, FETCH_CURRENT_CITY_WEATHER} from "../store/cityReducer";
import {weatherAPI} from "../api";

//
const getCoords = () =>{
    let data
    navigator.geolocation.getCurrentPosition((position) => {
        data = weatherAPI.byCoord(position.coords.latitude, position.coords.longitude)
    })
    return data
}

function* fetchCurrentCityWorker(){
    // const {lat, lon} = yield call(()=>getCoords());
    // yield call(()=>console.log(lat, lon))
    const data = yield call(()=>getCoords())
    console.log(data)
    yield put(setCurrentCity(data.data))
}

export function* currentCityWatcher(){
    yield takeEvery(FETCH_CURRENT_CITY_WEATHER, fetchCurrentCityWorker)
}