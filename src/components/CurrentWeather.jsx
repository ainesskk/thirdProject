import "../styles/CurrentWeather.css"
import {useContext} from "react";
import WeatherContext from "../contexts/WeatherContext.jsx";

const CurrentWeather = () => {
    const {currentCityInfo} = useContext(WeatherContext);
    // const [currentWeather, setCurrentWeather] = useState(null);


    return (
        <>
            <div className="h-[20vh] place-items-center col-span-2 grid grid-cols-2">
                {currentCityInfo ?
                    <>
                        <div className="col-span-1">
                            <p className="font-bold text-3xl">{currentCityInfo.city}</p>
                            <p className="font-semibold text-2xl">{currentCityInfo.temperature}°</p>
                        </div>
                        <div className="col-span-1">
                            <img src={`https://openweathermap.org/img/wn/${currentCityInfo.icon}@2x.png`}
                                 alt="currentWeather"/>
                        </div>
                    </>
                    :
                    <div className="col-span-2">
                        <img className="max-w-8" src="src/assets/preloader.gif" alt="preloader"/>
                    </div>
                }
            </div>
        </>
    );
};

export default CurrentWeather;
