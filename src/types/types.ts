export interface CityDataProps {
    cityData: CityData
}

export interface CityData {
    base: string,
    clouds: { all: number },
    cod: number,
    coord: { lon: number, lat: number },
    dt: number,
    dt_txt?: string,
    id: number,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        humidity: number,
        pressure: number
    }
    name: string,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    visibility: number,
    weather: [{ id: number, main: string, description: string, icon: string }],
    wind: { speed: number, deg: number, gust: number }
}