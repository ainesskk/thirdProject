import { useContext } from 'react';
import WeatherContext from '../contexts/WeatherContext.jsx';
import WeatherOption from './WeatherOption.jsx';

const WeatherOptionContainer = () => {
    const { currentCityInfo, settings } = useContext(WeatherContext);

    return (
        <>
            <div className="main-container">
                <div className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-12 gap-x-4 gap-y-4">
                    {currentCityInfo &&
                        <>
                            <WeatherOption option={"wind"} value={currentCityInfo.windSpeed} units={"meter/sec"} header={"Wind"}/>
                            <WeatherOption option={"pressure"} value={currentCityInfo.pressure} units={"hPa"} header={"Pressure"}/>
                            <WeatherOption option={"sunrise"} value={currentCityInfo.sunrise} units={""} header={"Sunrise"}/>
                            { settings.feelTemperature && <WeatherOption option={"temperature"} value={currentCityInfo.feelTemperature}
                                                                         units={"°C"} header={"Feel like"}/>}
                            { settings.humidity && <WeatherOption option={"humidity"} value={currentCityInfo.humidity}
                                                                         units={"%"} header={"Humidity"}/>}
                            { settings.sunset && <WeatherOption option={"sunset"} value={currentCityInfo.sunset} units={""}
                                                                         header={"Sunset"}/>}
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default WeatherOptionContainer;
