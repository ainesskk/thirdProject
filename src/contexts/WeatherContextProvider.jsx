import WeatherContext from "./WeatherContext.jsx";
import {useState, useEffect} from "react";
import {getGeolocationWeather} from "../api/geolocationApi.js";

const WeatherContextProvider = ({ children }) => {
    const [currentCityInfo, setCurrentCityInfo] = useState(null);

    useEffect(() => {
        const getIPGeolocation = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                return {
                    latitude: data.latitude,
                    longitude: data.longitude,
                };
            } catch (error) {
                console.error('Ошибка ipapi:', error);
                return null;
            }
        };

        const getWeatherData = async () => {
            try {
                const position = await getIPGeolocation();

                const responseDate = await getGeolocationWeather(position.latitude, position.longitude);

                const timestamp = responseDate.sys.sunset;
                const date = new Date(timestamp * 1000);

                const info = {
                    city: responseDate.name,
                    temperature: Math.round(responseDate.main.temp - 273.15),
                    feelTemperature: responseDate.main.feels_like,
                    humidity: responseDate.main.humidity,
                    icon: responseDate.weather[0].icon,
                    sunset: date,
                };

                setCurrentCityInfo(info);
            } catch (error) {
                console.error('Получение данных погоды по местоположению:', error);
            }
        };

        getWeatherData();


    }, []);

    return (
        <WeatherContext.Provider value={{ currentCityInfo, setCurrentCityInfo }}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider;
