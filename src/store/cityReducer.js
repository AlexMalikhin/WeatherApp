const defaultState = {newCityCoords: {}, allCities: []}

const DELETE_CITY_WEATHER = 'DELETE_CITY_WEATHER';
const ADD_NEW_CITY_COORDS = 'ADD_NEW_CITY_COORDS';
const ADD_WEATHER_NEW_CITY = 'ADD_WEATHER_NEW_CITY';
export const FETCH_CURRENT_WEATHER_CITY = 'FETCH_CURRENT_WEATHER_CITY';
export const FETCH_ADDED_WEATHER_CITY = 'FETCH_ADDED_WEATHER_CITY';

export const cityReducer = (state = defaultState, action)=>{
    switch (action.type){
        case ADD_NEW_CITY_COORDS:
            return {...state, newCityCoords: {latitude: action.payload.latitude, longitude: action.payload.longitude}}
        case ADD_WEATHER_NEW_CITY:
            return {...state, allCities: [...state.allCities, action.payload]}
        case DELETE_CITY_WEATHER:
            return {...state, allCities: state.allCities.filter(item=> item.id !== action.payload)}
        default :
            return state
    }
}

export const deleteCityWeather = payload => ({type: DELETE_CITY_WEATHER, payload})
export const addWeatherNewCity = payload => ({type: ADD_WEATHER_NEW_CITY, payload})
export const addNewCityCoords = (latitude, longitude) => ({type: ADD_NEW_CITY_COORDS, payload: {latitude: latitude, longitude: longitude}})
export const fetchCurrentCity = () =>({type: FETCH_CURRENT_WEATHER_CITY})
export const fetchAddedWeatherCity = () =>({type: FETCH_ADDED_WEATHER_CITY})