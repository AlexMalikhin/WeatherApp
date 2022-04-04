import {CityData} from "../../../types/types";

export interface CityReducerState {
    newCityCoords: {
        latitude?: string
        longitude?: string
    },
    allCities: [] | CityData[],
    detailedWeatherForecastParams: {
        cityName: string,
        coords: {
            lat: number, lon: number
        }
    },
    currentCityHourlyWeatherForecast: null | {[key: string]: CityData[]}
}