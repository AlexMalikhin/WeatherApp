import {put, takeEvery, call, select, all} from 'redux-saga/effects';
import {weatherAPI, geoLocateAPI} from "../../api";
import {
    addWeatherNewCity,
    addHourlyWeatherForecast,
    deleteAllCitiesAction
} from "../reducers/citiesReducer/citiesReducer";
import {changeThemeAction} from "../reducers/themeReducer/themeReducer";
import {
    FETCH_ADDED_WEATHER_CITY,
    FETCH_CURRENT_WEATHER_CITY,
    FETCH_HOURLY_WEATHER_FORECAST,
    CHANGE_LANGUAGE_WEATHER_DATA
} from "../reducers/citiesReducer/consts";

function* fetchCurrentCityWorker() {
    const currentLocation = yield call(() =>
        geoLocateAPI.getLocate('c44d41ee20fa4f7ad65b3bf9df85e7aa2026b8cd')
    )
    const {geo_lat, geo_lon} = currentLocation.data.location.data
    const {languageReducer} = yield select()
    // const data = yield call(() => weatherAPI.byCoord(52.9668,  36.0625, languageReducer.language))
    const data = yield call(()=> weatherAPI.byCoord(geo_lat, geo_lon, languageReducer.language))
    yield put(changeThemeAction(data.data.weather[0].id))
    yield put(addWeatherNewCity(data.data))
}

function* fetchAddedWeatherCityWorker() {
    const {languageReducer} = yield select()
    const {citiesReducer} = yield select()
    const data = yield call(() =>
        weatherAPI.byCoord(
            citiesReducer.newCityCoords.latitude,
            citiesReducer.newCityCoords.longitude,
            languageReducer.language
        )
    )
    yield put(addWeatherNewCity(data.data))
}

function* fetchHourlyWeatherForecastWorker() {
    const store = yield select()
    const {lat, lon} = store.citiesReducer.detailedWeatherForecastParams.coords
    const {language} = store.languageReducer
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
    yield put(addHourlyWeatherForecast(filteredList))
}

function* changeWeatherDataLanguageWorker() {
    const store = yield select();
    yield put(deleteAllCitiesAction())
    const translatedCities = yield all(store.citiesReducer.allCities.map((city) => (
        call(() => weatherAPI.byCoord(city.coord.lat, city.coord.lon, store.languageReducer.language))
    )))
    yield all(translatedCities.map((city) => put(addWeatherNewCity(city.data))))
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

export function* changeWeatherDataLanguageWatcher() {
    yield takeEvery(CHANGE_LANGUAGE_WEATHER_DATA, changeWeatherDataLanguageWorker)
}