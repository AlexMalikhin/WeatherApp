import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
})

export const weatherAPI = {
    byCoord(lat: number, lon: number) {
        return instance.get(`weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=471fb871540b1cabfd3ed0bce031cb0d`)
    },
    byCoordAndDate(city: string) {
        return instance.get(`weather?q=${city}&units=metric&lang=ru&appid=471fb871540b1cabfd3ed0bce031cb0d`)
    },
    // byWeek(lat: number, lon: number) {
    //     return instance.get(`forecast?lat=${lat}&lon=${lon}&appid=471fb871540b1cabfd3ed0bce031cb0d`).then(res => res.data.list)
    // }
}

export const geoLocateAPI = {
    getLocate(token: string){
        return axios.get('https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address', {headers: {
                "Authorization": "Token " + token
            }})
    }
}