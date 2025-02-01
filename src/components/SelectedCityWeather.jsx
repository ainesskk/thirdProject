import "../styles/CurrentWeather.css"
import {useContext} from "react";
import WeatherContext from "../contexts/WeatherContext.jsx";
import CurrentWeather from "./CurrentWeather.jsx";
import WeatherOptionContainer from "./WeatherOptionContainer.jsx";

const SelectedCityWeather = () => {
    const {selectedLocationInfo} = useContext(WeatherContext);

    return (
        <>
            <CurrentWeather cityInfo={selectedLocationInfo}/>
            <WeatherOptionContainer cityInfo={selectedLocationInfo} />
        </>
    );
};

export default SelectedCityWeather;
