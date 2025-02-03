import "../styles/CurrentWeather.css"
import {useParams, useNavigate} from "react-router-dom";
import CurrentWeather from "./CurrentWeather.jsx";
import WeatherOptionContainer from "./WeatherOptionContainer.jsx";
import {useEffect, useState} from "react";
import {getGeolocationWeatherWithCityName} from "../js/api/geolocationApi.js";
import extractInfo from "../js/extractInfo.js";
import BackButton from "./BackButton.jsx";
import SaveButton from "./SaveButton.jsx";

const SearchCityWeather = () => {
    const {cityName} = useParams();
    const navigate = useNavigate();
    const [searchCityInfo, setSearchCityInfo] = useState(null);

    useEffect(() => {
        const getSelectedCityWeather = async () => {
            const response = await getGeolocationWeatherWithCityName(cityName);
            if(response.cod !== 200)
                navigate("*");
            else
                setSearchCityInfo(extractInfo(response));
        }

        getSelectedCityWeather();
    }, [cityName])

    return (
        <>
            <div className="main-container">
                <BackButton navigateLocation={-1}/>
                <SaveButton  cityInfo={searchCityInfo}/>
            </div>
            <CurrentWeather cityInfo={searchCityInfo}/>
            <WeatherOptionContainer cityInfo={searchCityInfo} />
        </>
    );
};

export default SearchCityWeather;