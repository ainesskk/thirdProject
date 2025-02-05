import WeatherContext from "./WeatherContext.jsx";
import {useState, useEffect} from "react";
import {
    saveCurrentLocation,
    getSavedLocations,
    getSelectedLocation,
    saveSelectedLocation,
    saveSavedLocations, getCurrentLocation
} from "../js/localStorage/localStorageFuncs.js"
import {getGeolocationWeather, getGeolocationWeatherWithCityName} from "../js/api/geolocationApi.js";
import extractInfo from "../js/extractInfo.js";
import PropTypes from "prop-types";

const WeatherContextProvider = ({ children }) => {
    const [currentCityInfo, setCurrentCityInfo] = useState(null);
    const [savedLocations, setSavedLocations] = useState([]);
    const [selectedLocationInfo, setSelectedLocationInfo] = useState(null);

    useEffect(() => {

        const getCurrentLocationInfo = async (returnCurrentLocationWeather) => {
            navigator.geolocation.getCurrentPosition(async function(position) {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                const responseData = await getGeolocationWeather(latitude, longitude);
                returnCurrentLocationWeather(extractInfo(responseData));
            }, async function(error) {
                console.error('Ошибка получения геолокации', error);
                const responseData = await getGeolocationWeather(55.75149845182549, 37.617655078129104);
                returnCurrentLocationWeather(extractInfo(responseData));
            });
        }

        const loadSavedLocations = async () => {
            try {
                const responseSavedLocations = await getSavedLocations();
                setSavedLocations(responseSavedLocations);
            } catch (error) {
                console.error('Ошибка получения сохраненных городов:', error);
            }
        };

        loadSavedLocations();

        const loadSelectedLocation = async () => {
            try {
                const selectedLocation = await getSelectedLocation();
                if (selectedLocation) {
                    let currentLocationInfoTmp = {};

                    const getCurrentLocationInfoPromise = new Promise((resolve, reject) => {
                        getCurrentLocationInfo(async (CurrentLocationWeather) => {
                            currentLocationInfoTmp = CurrentLocationWeather;
                            setCurrentCityInfo(CurrentLocationWeather);
                            await saveCurrentLocation(CurrentLocationWeather.city);
                            resolve();
                        });
                    });

                    await getCurrentLocationInfoPromise;

                    const selectedLocationInfoResponse = extractInfo(await getGeolocationWeatherWithCityName(selectedLocation));
                    const savedLocationsResponse = await getSavedLocations();

                    if (savedLocationsResponse.length > 0 &&
                        (savedLocationsResponse.some(location => (location === selectedLocation)) || currentLocationInfoTmp.city === selectedLocation)) {
                            setSelectedLocationInfo(selectedLocationInfoResponse);
                            await saveSelectedLocation(selectedLocationInfoResponse.city);

                    } else {
                        setSelectedLocationInfo(currentLocationInfoTmp);
                        await saveSelectedLocation(currentLocationInfoTmp.city);
                    }
                } else {
                    await new Promise((resolve, reject) => {
                        getCurrentLocationInfo(async (CurrentLocationWeather) => {
                            setCurrentCityInfo(CurrentLocationWeather);
                            setSelectedLocationInfo(CurrentLocationWeather);
                            await saveCurrentLocation(CurrentLocationWeather.city);
                            await saveSelectedLocation(CurrentLocationWeather.city);
                            resolve();
                        });
                    });
                }
            } catch (error) {
                console.error('Ошибка получения информации по выбранному городу:', error);
            }
        };

        loadSelectedLocation();


    }, []);

    const changeSelectedLocation = async (newSelectedLocation) => {
        const selectedLocationInfoResponse = extractInfo(await getGeolocationWeatherWithCityName(newSelectedLocation));
        setSelectedLocationInfo(selectedLocationInfoResponse);
        await saveSelectedLocation(selectedLocationInfoResponse.city);
    }

    const addSavedLocation = async (newSavedLocation) => {
        if (savedLocations){
            const newSavedLocationsArray = [...savedLocations, newSavedLocation];
            setSavedLocations(prevState => [...prevState, newSavedLocation]);
            await saveSavedLocations(newSavedLocationsArray);
        }
        else{
            setSavedLocations([newSavedLocation]);
            await saveSavedLocations(newSavedLocation);
        }
    }

    const deleteSavedLocation = async (deleteLocation) => {
        if(selectedLocationInfo.city === deleteLocation){
            await changeSelectedLocation(currentCityInfo.city);
        }
        const newSavedLocations = savedLocations.filter((location) => location !== deleteLocation)
        setSavedLocations(prevState => prevState.filter((location) => location !== deleteLocation));
        await saveSavedLocations(newSavedLocations);
    }

    return (
        <WeatherContext.Provider value={{
            currentCityInfo,
            setCurrentCityInfo,
            savedLocations,
            selectedLocationInfo,
            changeSelectedLocation,
            deleteSavedLocation,
            addSavedLocation,
        }}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider;

WeatherContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}