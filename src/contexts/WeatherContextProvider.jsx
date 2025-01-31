import WeatherContext from "./WeatherContext.jsx";
import {useState, useEffect} from "react";
import {
    saveCurrentLocation,
    getSavedLocations,
    getSelectedLocation,
    saveSelectedLocation,
    saveSavedLocations
} from "../localStorage/localStorageFuncs.js"
import {getGeolocationWeather} from "../api/geolocationApi.js";

const WeatherContextProvider = ({ children }) => {
    const [currentCityInfo, setCurrentCityInfo] = useState(null);
    const [savedLocations, setSavedLocations] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(function(position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            const getWeatherData = async () => {
                const responseData = await getGeolocationWeather(latitude, longitude);
                const info = extractInfo(responseData);
                console.log(info);
                await saveCurrentLocation(info.city)
                setCurrentCityInfo(info);
            }

            getWeatherData();
        }, function(error) {
            console.error('Ошибка получения геолокации', error);
            const getWeatherData = async () => {
                const responseData = await getGeolocationWeather(55.74994318370189, 37.808555028639695);
                const info = extractInfo(responseData);

                console.log(info);
                await saveCurrentLocation(info.city)
                setCurrentCityInfo(info);
            }

            getWeatherData();
        });

    }, []);

    useEffect(() => {

        const loadSavedLocations = async () => {
            try {
                const savedLocations = await getSavedLocations();
                setSavedLocations(savedLocations);
            } catch (error) {
                console.error('Ошибка получения сохраненных городов:', error);
            }
        };

        const loadSelectedLocation = async () => {
            try {
                const selectedLocation = await getSelectedLocation();
                selectedLocation ? setSelectedLocation(selectedLocation) : setSelectedLocation(currentCityInfo.city);
            } catch (error) {
                console.error('Ошибка получения выбранного города:', error);
            }
        };

        loadSelectedLocation();
        loadSavedLocations();

    }, [currentCityInfo]);

    const extractInfo = (responseData) => {
        const sunsetTimestamp = responseData.sys.sunset;
        const sunsetDate = new Date(sunsetTimestamp * 1000);
        const sunriseTimestamp = responseData.sys.sunrise;
        const sunriseDate = new Date(sunriseTimestamp * 1000);

        return {
            city: responseData.name,
            temperature: Math.round(responseData.main.temp - 273.15),
            description: responseData.weather[0].description,
            icon: responseData.weather[0].icon,
            feelTemperature: Math.round(responseData.main.feels_like - 273.15),
            humidity: responseData.main.humidity,
            sunset: (sunsetDate.getHours() < 10 ? "0" + sunsetDate.getMinutes() : sunsetDate.getHours()) + ":" + (sunsetDate.getMinutes() < 10 ? "0" + sunsetDate.getMinutes() : sunsetDate.getMinutes()),
            sunrise: (sunriseDate.getHours() < 10 ? "0" + sunriseDate.getMinutes() : sunriseDate.getHours()) + ":" + (sunriseDate.getMinutes() < 10 ? "0" + sunriseDate.getMinutes() : sunriseDate.getMinutes()),
            windSpeed: responseData.wind.speed,
            pressure: responseData.main.pressure,
        };

        // return {
        //     "city": "Moscow",
        //     "temperature": 3,
        //     "description": "overcast clouds",
        //     "icon": "04n",
        //     "feelTemperature": -2,
        //     "humidity": 72,
        //     "sunset": "16:31",
        //     "windSpeed": 6.81,
        //     "pressure": 1011,
        //     "sunrise": "8:43"
        // }
    }

    const changeSelectedLocation = async (newSelectedLocation) => {
        setSelectedLocation(newSelectedLocation);
        await saveSelectedLocation(newSelectedLocation);
    }

    const changeSavedLocations = async (newSavedLocation) => {
        setSavedLocations(prevState => [...prevState, newSavedLocation]);
        await saveSavedLocations(savedLocations);
    }

    return (
        <WeatherContext.Provider value={{
            currentCityInfo,
            setCurrentCityInfo,
            savedLocations,
            selectedLocation,
            changeSelectedLocation,
            changeSavedLocations,
        }}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider;