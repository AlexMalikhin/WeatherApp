import {put, takeEvery, call, select, all} from 'redux-saga/effects';
import {
    addWeatherNewCity,
    FETCH_CURRENT_WEATHER_CITY,
    FETCH_ADDED_WEATHER_CITY,
    FETCH_HOURLY_WEATHER_FORECAST,
    addHourlyWeatherForecast, CHANGE_LANGUAGE_WEATHER_DATA, deleteAllCitiesAction
} from "../store/cityReducer";
import {weatherAPI, geoLocateAPI} from "../api";

const getUserLocation = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(location => resolve(location), error => reject(error),)
})

function* fetchCurrentCityWorker() {
    //       default geolocation
    // const location = yield call(getUserLocation)
    // const {latitude, longitude} = location.coords
    // const data = yield call(()=>weatherAPI.byCoord(latitude, longitude))


    //    dadata location API
    const currentLocation = yield call(() => geoLocateAPI.getLocate('c44d41ee20fa4f7ad65b3bf9df85e7aa2026b8cd'))
    const {geo_lat, geo_lon} = currentLocation.data.location.data
    const {language} = yield select()
    const data = yield call(() => weatherAPI.byCoord(geo_lat, geo_lon, language))
    yield put(addWeatherNewCity(data.data))
}

function* fetchAddedWeatherCityWorker() {
    const store = yield select()
    const data = yield call(() => weatherAPI.byCoord(store.newCityCoords.latitude, store.newCityCoords.longitude, store.language))
    yield put(addWeatherNewCity(data.data))
}

function* fetchHourlyWeatherForecastWorker() {
    const store = yield select()
    const {lat, lon} = store.detailedWeatherForecastParams.coords
    const {language} = store
    const data = yield call(() => weatherAPI.byCoordFiveDaysThreeHours(lat, lon, language))
    const {list} = data.data
    const actualList = list.slice(1, 40)
    const dates = [];
    actualList.map((item) => {
        if (!dates.includes(item.dt_txt.slice(5, 10))) {
            dates.push(item.dt_txt.slice(5, 10))
        }
        return item
    })
    const filteredList = {}
    dates.map((date) => filteredList[date] = actualList.filter((listItem) => listItem.dt_txt.slice(5, 10) === date))
    yield call(() => console.log(filteredList))
    yield put(addHourlyWeatherForecast(filteredList))
}

function* changeWeatherDataLanguageWorker(){
    const store = yield select();
    const {allCities} = store
    yield put(deleteAllCitiesAction())
    const translatedCities = yield all(allCities.map((city)=>(
        call(()=>weatherAPI.byCoord(city.coord.lat, city.coord.lon, store.language ))
    )))
    yield all(translatedCities.map((city)=>put(addWeatherNewCity(city.data))))
}


export function* addedCityWeatherWatcher() {
    yield takeEvery(FETCH_ADDED_WEATHER_CITY, fetchAddedWeatherCityWorker)
}

export function* currentCityWatcher() {
    yield takeEvery(FETCH_CURRENT_WEATHER_CITY, fetchCurrentCityWorker)
}

export function* getHourlyWeatherForecast() {
    yield takeEvery(FETCH_HOURLY_WEATHER_FORECAST, fetchHourlyWeatherForecastWorker)
}

export function* changeWeatherDataLanguageWatcher(){
    yield takeEvery(CHANGE_LANGUAGE_WEATHER_DATA, changeWeatherDataLanguageWorker)
}