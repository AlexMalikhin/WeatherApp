const defaultState = {currentCity: null}

const SET_CURRENT_CITY_WEATHER = 'SET_CURRENT_CITY_WEATHER';
export const FETCH_CURRENT_CITY_WEATHER = 'FETCH_CURRENT_CITY_WEATHER';

export const cityReducer = (state = defaultState, action)=>{
    switch (action.type){
        case SET_CURRENT_CITY_WEATHER:
            return {...state, currentCity: action.payload}
        default :
            return state
    }
}

export const setCurrentCity = payload => ({type: SET_CURRENT_CITY_WEATHER, payload})
export const fetchCurrentCity = () =>({type: FETCH_CURRENT_CITY_WEATHER})