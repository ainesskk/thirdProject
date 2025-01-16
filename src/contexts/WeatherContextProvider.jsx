import WeatherContext from "./WeatherContext.jsx";
import {useState, useEffect} from "react";
import {getGeolocationWeather} from "../api/geolocationApi.js";

const WeatherContextProvider = ({ children }) => {
    const [currentCityInfo, setCurrentCityInfo] = useState(null);

    useEffect(() => {
        // navigator.geolocation.getCurrentPosition(function(position) {
        //     let latitude = position.coords.latitude;
        //     let longitude = position.coords.longitude;
        //
        //     const getWeatherData = async () => {
        //         const responseDate = await getGeolocationWeather(latitude, longitude);
        //
        //         const timestamp = responseDate.sys.sunset;
        //         const date = new Date(timestamp * 1000);
        //
        //         const info = {
        //             city: responseDate.name,
        //             temperature: Math.round(responseDate.main.temp - 273.15),
        //             feelTemperature: responseDate.main.feels_like,
        //             humidity: responseDate.main.humidity,
        //             icon: responseDate.weather[0].icon,
        //             sunset: date,
        //         }
        //
        //         setCurrentCityInfo(info);
        //     }
        //
        //     getWeatherData();
        // }, function(error) {
        //     console.error('ошибка получения геолокации', error);
        // });
        navigator.geolocation.getCurrentPosition(console.log, console.error);
    }, []);

    return (
        <WeatherContext.Provider value={{ currentCityInfo, setCurrentCityInfo }}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider;
