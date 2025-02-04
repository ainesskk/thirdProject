import preloader from "../../assets/preloader.gif"
import PropTypes from "prop-types";

const CurrentWeather = ({cityInfo}) => {

    return (
        <>
            <div className="main-container">
                <div className="min-h-[250px] grid grid-cols-2 md:grid-cols-6 xl:grid-cols-12 gap-x-4 place-items-center">
                    {cityInfo ?
                        <>
                            <div className="col-span-1 md:col-span-2 md:col-start-2 xl:col-span-3 xl:col-start-4">
                                <h2 className="font-bold mb-5">{cityInfo.city}</h2>
                                <h1 className="font-semibold">{cityInfo.temperature}°C</h1>
                            </div>
                            <div className="col-span-1 md:col-span-2 md:col-start-4 xl:grid-cols-4 xl:col-start-8">
                                <img className="mx-auto" src={`https://openweathermap.org/img/wn/${cityInfo.icon}@2x.png`}
                                     alt="currentWeather"/>
                                <p className="body-text text-center">{cityInfo.description}</p>
                            </div>
                        </>
                        :
                        <div className="col-span-2 md:col-span-6 xl:col-span-12">
                            <img className="max-w-8" src={preloader} alt="preloader"/>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default CurrentWeather;

CurrentWeather.propTypes = {
    cityInfo: PropTypes.shape({
        city: PropTypes.string.isRequired,
        temperature: PropTypes.number.isRequired,
        icon: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    })
};