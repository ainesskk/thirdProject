import { useContext } from 'react';
import WeatherOption from './WeatherOption.jsx';
import pressure from "../../assets/pressure.png";
import wind from "../../assets/wind.png";
import sunrise from "../../assets/sunrise.png";
import sunset from "../../assets/sunset.png";
import temperature from "../../assets/temperature.png";
import humidity from "../../assets/humidity.png";
import SettingsContext from "../../contexts/SettingsContext.jsx";
import PropTypes from "prop-types";

const WeatherOptionContainer = ({cityInfo}) => {
    const { settings } = useContext(SettingsContext);

    return (
        <>
            <div className="main-container">
                <div className="grid grid-cols-2 md:grid-cols-6 xl:flex xl:flex-wrap xl:justify-center gap-x-4 gap-y-4 mb-8">
                    {cityInfo &&
                        <>
                            <WeatherOption option={"wind"} value={cityInfo.windSpeed} units={"meter/sec"} header={"Wind"} image={wind}/>
                            <WeatherOption option={"pressure"} value={cityInfo.pressure} units={"hPa"} header={"Pressure"} image={pressure}/>
                            <WeatherOption option={"sunrise"} value={cityInfo.sunrise} units={""} header={"Sunrise"} image={sunrise}/>
                            { settings.feelTemperature && <WeatherOption option={"temperature"} value={cityInfo.feelTemperature}
                                                                         units={"°C"} header={"Feel like"} image={temperature}/>}
                            { settings.humidity && <WeatherOption option={"humidity"} value={cityInfo.humidity}
                                                                         units={"%"} header={"Humidity"} image={humidity}/>}
                            { settings.sunset && <WeatherOption option={"sunset"} value={cityInfo.sunset} units={""}
                                                                         header={"Sunset"} image={sunset}/>}
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default WeatherOptionContainer;

WeatherOptionContainer.propTypes = {
    cityInfo: PropTypes.shape({
        windSpeed: PropTypes.number.isRequired,
        feelTemperature: PropTypes.number.isRequired,
        pressure: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        sunrise: PropTypes.string.isRequired,
        sunset: PropTypes.string.isRequired,
    })
};
