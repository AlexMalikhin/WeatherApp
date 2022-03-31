import {
    ADD_NEW_CITY_COORDS,
    ADD_WEATHER_NEW_CITY,
    DELETE_CITY_WEATHER,
    ADD_PARAMS_DETAILED_WEATHER_FORECAST,
    ADD_HOURLY_WEATHER_FORECAST,
    DELETE_ALL_CITIES,
    CHANGE_LANGUAGE_WEATHER_DATA,
    FETCH_ADDED_WEATHER_CITY,
    FETCH_CURRENT_WEATHER_CITY,
    FETCH_HOURLY_WEATHER_FORECAST
} from "./consts";
import {CityReducerState} from "./types";
import {CityData} from "../../../types/types";


const defaultState: CityReducerState = {
    newCityCoords: {},
    allCities: [],
    detailedWeatherForecastParams: {},
    currentCityHourlyWeatherForecast: null,
}

export const citiesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NEW_CITY_COORDS:
            return {...state, newCityCoords: {latitude: action.payload.latitude, longitude: action.payload.longitude}}
        case ADD_WEATHER_NEW_CITY:
            return {...state, allCities: [...state.allCities, action.payload]}
        case DELETE_CITY_WEATHER:
            return {...state, allCities: state.allCities.filter((item) => item.id !== action.payload)}
        case ADD_PARAMS_DETAILED_WEATHER_FORECAST:
            return {
                ...state,
                detailedWeatherForecastParams: {coords: action.payload.coords, cityName: action.payload.cityName}
            }
        case ADD_HOURLY_WEATHER_FORECAST:
            return {
                ...state,
                currentCityHourlyWeatherForecast: action.payload
            }
        case DELETE_ALL_CITIES:
            return {
                ...state,
                allCities: []
            }
        default :
            return state
    }
}

export const deleteAllCitiesAction = () => ({type: DELETE_ALL_CITIES})
export const addParamsDetailedWeatherForecast = (coords, cityName) => ({
    type: ADD_PARAMS_DETAILED_WEATHER_FORECAST, payload: {coords: coords, cityName: cityName}
})
export const deleteCityWeather = payload => ({type: DELETE_CITY_WEATHER, payload})
export const addWeatherNewCity = payload => ({type: ADD_WEATHER_NEW_CITY, payload})
export const addNewCityCoords = (latitude, longitude) => ({
    type: ADD_NEW_CITY_COORDS, payload: {latitude: latitude, longitude: longitude}
})

interface addHourlyWeatherForecastInterface{
    type: string,
    payload: {[key:string]: CityData[]}
}

export const addHourlyWeatherForecast = (fullWeatherCityForecast) => ({
    type: ADD_HOURLY_WEATHER_FORECAST, payload: fullWeatherCityForecast
})

export const changeLanguageWeatherData = () => ({type: CHANGE_LANGUAGE_WEATHER_DATA})
export const fetchCurrentCity = () => ({type: FETCH_CURRENT_WEATHER_CITY})
export const fetchAddedWeatherCity = () => ({type: FETCH_ADDED_WEATHER_CITY})
export const fetchHourlyWeatherForecast = () => ({type: FETCH_HOURLY_WEATHER_FORECAST})