import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
})

export const weatherAPI = {
    byCoord(lat: number, lon: number, language: string) {
        return instance.get(`weather?lat=${lat}&lon=${lon}&units=metric&lang=${language}&appid=2fcd253d22ebf7c6a74540426dcfcd16`)
    },
    byCoordFiveDaysThreeHours(lat: number, lon: number, language: string) {
        return instance.get(`forecast?lat=${lat}&lang=${language}&lon=${lon}&units=metric&appid=2fcd253d22ebf7c6a74540426dcfcd16`)
    },
}

export const geoLocateAPI = {
    getLocate(token: string) {
        return axios.get('https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address', {
            headers: {
                "Authorization": "Token " + token
            }
        })
    }
}