import "../styles/DayForecast.css"
import {useEffect, useState} from "react";

const DayForecast = () => {
    const [dayWeather, setDayWeather] = useState(null);

    useEffect(() => {

    }, []);


    return (
        <>
            <div className="h-[20vh] place-items-center col-span-2 grid grid-cols-2">
                {dayWeather ?
                    <>
                        <div className="col-span-1">
                            <p className="font-bold text-3xl">{dayWeather.city}</p>
                            <p className="font-semibold text-2xl">{dayWeather.temperature}°C</p>
                        </div>
                        <div className="col-span-1">
                            <img src={`https://openweathermap.org/img/wn/${dayWeather.icon}@2x.png`}
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

export default DayForecast;
