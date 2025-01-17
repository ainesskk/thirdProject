import "../styles/CurrentWeather.css"
import {useContext} from "react";
import WeatherContext from "../contexts/WeatherContext.jsx";

const CurrentWeather = () => {
    const {currentCityInfo} = useContext(WeatherContext);

    return (
        <>
            <div className="main-container">
                <div className="min-h-[250px] grid grid-cols-2 md:grid-cols-6 xl:grid-cols-12 gap-x-4 place-items-center">
                    {currentCityInfo ?
                        <>
                            <div className="col-span-1 md:col-span-2 md:col-start-2 xl:col-span-3 xl:col-start-4">
                                <h2 className="font-bold mb-5">{currentCityInfo.city}</h2>
                                <h1 className="font-semibold">{currentCityInfo.temperature}°C</h1>
                            </div>
                            <div className="col-span-1 md:col-span-2 md:col-start-4 xl:grid-cols-4 xl:col-start-8">
                                <img className="mx-auto" src={`https://openweathermap.org/img/wn/${currentCityInfo.icon}@2x.png`}
                                     alt="currentWeather"/>
                                <p className="body-text text-center">{currentCityInfo.description}</p>
                            </div>
                        </>
                        :
                        <div className="col-span-2 md:col-span-6 xl:col-span-12">
                            <img className="max-w-8" src="src/assets/preloader.gif" alt="preloader"/>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default CurrentWeather;
