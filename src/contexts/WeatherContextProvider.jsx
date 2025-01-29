import WeatherContext from "./WeatherContext.jsx";
import {useState, useEffect} from "react";
import {getSettings, saveSettings} from "../localStorage/localStorageFuncs.js"
import {getGeolocationWeather} from "../api/geolocationApi.js";

const WeatherContextProvider = ({ children }) => {
    const [currentCityInfo, setCurrentCityInfo] = useState(null);
    const [settings, setSettings] = useState(null);

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(function(position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            const getWeatherData = async () => {
                // const responseData = await getGeolocationWeather(latitude, longitude);
                // const responseDate = await getGeolocationWeather(55.750662161810126, 37.58864464621616);
                // const sunsetTimestamp = responseData.sys.sunset;
                // const sunsetDate = new Date(sunsetTimestamp * 1000);
                // const sunriseTimestamp = responseData.sys.sunrise;
                // const sunriseDate = new Date(sunriseTimestamp * 1000);
                //
                // const info = {
                //     city: responseData.name,
                //     temperature: Math.round(responseData.main.temp - 273.15),
                //     description: responseData.weather[0].description,
                //     icon: responseData.weather[0].icon,
                //     feelTemperature: Math.round(responseData.main.feels_like - 273.15),
                //     humidity: responseData.main.humidity,
                //     sunset: (sunsetDate.getHours() < 10 ? "0" + sunsetDate.getMinutes() : sunsetDate.getHours()) + ":" + (sunsetDate.getMinutes() < 10 ? "0" + sunsetDate.getMinutes() : sunsetDate.getMinutes()),
                //     sunrise: (sunriseDate.getHours() < 10 ? "0" + sunriseDate.getMinutes() : sunriseDate.getHours()) + ":" + (sunriseDate.getMinutes() < 10 ? "0" + sunriseDate.getMinutes() : sunriseDate.getMinutes()),
                //     windSpeed: responseData.wind.speed,
                //     pressure: responseData.main.pressure,
                // };

                const info = {
                    "city": "Moscow",
                    "temperature": 3,
                    "description": "overcast clouds",
                    "icon": "04n",
                    "feelTemperature": -2,
                    "humidity": 72,
                    "sunset": "16:31",
                    "windSpeed": 6.81,
                    "pressure": 1011,
                    "sunrise": "8:43"
                }

                console.log(info);

                setCurrentCityInfo(info);
            }

            getWeatherData();
        }, function(error) {
            console.error('ошибка получения геолокации', error);
        });

        const getWeatherSettings = async () => {
            try {
               const startSettings = await getSettings();

                setSettings(startSettings);
            } catch (error) {
                console.error('Получение настроек:', error);
            }
        };

        getWeatherSettings();

    }, []);

    const changeSettings = async (newSettings) => {
        setSettings(newSettings);
        await saveSettings(newSettings);
    }


    return (
        <WeatherContext.Provider value={{ currentCityInfo, setCurrentCityInfo, settings, changeSettings }}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider;

// const getIPGeolocation = async () => {
//     try {
//         const response = await fetch('https://ipinfo.io/json?token=YOUR_API_TOKEN');
//         const data = await response.json();
//         const [latitude, longitude] = data.loc.split(',');
//         return { latitude, longitude };
//     } catch (error) {
//         console.error('Ошибка ipinfo:', error);
//         return null;
//     }
// };

//
//
//
//
// const getWeatherData = async () => {
//     try {
//         const position = await getIPGeolocation();
//
//         const responseDate = await getGeolocationWeather(position.latitude, position.longitude);
//
//         const timestamp = responseDate.sys.sunset;
//         const date = new Date(timestamp * 1000);
//
//         const info = {
//             city: responseDate.name,
//             temperature: Math.round(responseDate.main.temp - 273.15),
//             description: responseDate.weather[0].description,
//             icon: responseDate.weather[0].icon,
//             feelTemperature: Math.round(responseDate.main.feels_like - 273.15),
//             humidity: responseDate.main.humidity,
//             sunset: date.getHours() + ":" + date.getMinutes(),
//             windSpeed: responseDate.wind.speed,
//             pressure: responseDate.main.pressure,
//         };
//
//         setCurrentCityInfo(info);
//     } catch (error) {
//         console.error('Получение данных погоды по местоположению:', error);
//     }
// };
//
