import { useContext } from 'react';
import WeatherContext from '../contexts/WeatherContext.jsx';
import WeatherOption from './WeatherOption.jsx';
import pressure from "./../assets/pressure.png";
import wind from "./../assets/wind.png";
import sunrise from "./../assets/sunrise.png";
import sunset from "./../assets/wind.png";
import temperature from "./../assets/temperature.png";
import humidity from "./../assets/humidity.png";

const WeatherOptionContainer = () => {
    const { currentCityInfo, settings } = useContext(WeatherContext);

    return (
        <>
            <div className="main-container">
                <div className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-12 gap-x-4 gap-y-4">
                    {currentCityInfo &&
                        <>
                            <WeatherOption option={"wind"} value={currentCityInfo.windSpeed} units={"meter/sec"} header={"Wind"} image={wind}/>
                            <WeatherOption option={"pressure"} value={currentCityInfo.pressure} units={"hPa"} header={"Pressure"} image={pressure}/>
                            <WeatherOption option={"sunrise"} value={currentCityInfo.sunrise} units={""} header={"Sunrise"} image={sunrise}/>
                            { settings.feelTemperature && <WeatherOption option={"temperature"} value={currentCityInfo.feelTemperature}
                                                                         units={"°C"} header={"Feel like"} image={temperature}/>}
                            { settings.humidity && <WeatherOption option={"humidity"} value={currentCityInfo.humidity}
                                                                         units={"%"} header={"Humidity"} image={humidity}/>}
                            { settings.sunset && <WeatherOption option={"sunset"} value={currentCityInfo.sunset} units={""}
                                                                         header={"Sunset"} image={sunset}/>}
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default WeatherOptionContainer;
