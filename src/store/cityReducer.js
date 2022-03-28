import {LOCALES} from "../i18n";

const defaultState = {
    newCityCoords: {},
    allCities: [],
    detailedWeatherForecastParams: {},
    currentCityHourlyWeatherForecast: null,
    language: LOCALES.RUSSIAN
}

const DELETE_CITY_WEATHER = 'DELETE_CITY_WEATHER';
const ADD_NEW_CITY_COORDS = 'ADD_NEW_CITY_COORDS';
const ADD_WEATHER_NEW_CITY = 'ADD_WEATHER_NEW_CITY';
const ADD_PARAMS_DETAILED_WEATHER_FORECAST = 'ADD_PARAMS_DETAILED_WEATHER_FORECAST';
const ADD_HOURLY_WEATHER_FORECAST = 'ADD_HOURLY_WEATHER_FORECAST';
const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
const DELETE_ALL_CITIES = 'DELETE_ALL_CITIES';
export const CHANGE_LANGUAGE_WEATHER_DATA = 'CHANGE_LANGUAGE_WEATHER_DATA'
export const FETCH_CURRENT_WEATHER_CITY = 'FETCH_CURRENT_WEATHER_CITY';
export const FETCH_ADDED_WEATHER_CITY = 'FETCH_ADDED_WEATHER_CITY';
export const FETCH_HOURLY_WEATHER_FORECAST = 'FETCH_HOURLY_WEATHER_FORECAST';

export const cityReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NEW_CITY_COORDS:
            return {...state, newCityCoords: {latitude: action.payload.latitude, longitude: action.payload.longitude}}
        case ADD_WEATHER_NEW_CITY:
            return {...state, allCities: [...state.allCities, action.payload]}
        case DELETE_CITY_WEATHER:
            return {...state, allCities: state.allCities.filter(item => item.id !== action.payload)}
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
        case CHANGE_LANGUAGE:
            return {
                ...state,
                language: action.payload
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

export const deleteAllCitiesAction = () =>({type: DELETE_ALL_CITIES})
export const addParamsDetailedWeatherForecast = (coords, cityName) => ({
    type: ADD_PARAMS_DETAILED_WEATHER_FORECAST, payload: {coords: coords, cityName: cityName}
})
export const deleteCityWeather = payload => ({type: DELETE_CITY_WEATHER, payload})
export const addWeatherNewCity = payload => ({type: ADD_WEATHER_NEW_CITY, payload})
export const addNewCityCoords = (latitude, longitude) => ({
    type: ADD_NEW_CITY_COORDS, payload: {latitude: latitude, longitude: longitude}
})
export const addHourlyWeatherForecast = (payload) => ({
    type: ADD_HOURLY_WEATHER_FORECAST, payload: payload
})
export const changeLanguageAction = (payload) =>({type: CHANGE_LANGUAGE, payload})
export const changeLanguageWeatherData = () => ({type: CHANGE_LANGUAGE_WEATHER_DATA})
export const fetchCurrentCity = () => ({type: FETCH_CURRENT_WEATHER_CITY})
export const fetchAddedWeatherCity = () => ({type: FETCH_ADDED_WEATHER_CITY})
export const fetchHourlyWeatherForecast = () => ({type: FETCH_HOURLY_WEATHER_FORECAST})