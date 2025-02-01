import PropTypes from "prop-types";
import WeatherContext from "../contexts/WeatherContext.jsx";
import {useContext} from "react";


const CityItem = ({cityName,  selectLocation}) => {
    const {selectedLocationInfo} = useContext(WeatherContext);

    return (
        <>
            <div className={`inline-block px-[15px] py-[10px] m-4 rounded-2xl cursor-pointer 
                ${selectedLocationInfo.city === cityName ? "bg-blue-700" : "bg-gray-200"}`} onClick={() => {selectLocation(cityName)}}>
                <p className={`body-text2 ${selectedLocationInfo.city === cityName ? "text-white" : "text-black"}`}>{cityName}</p>
            </div>
        </>
    )
}

export default CityItem;

CityItem.propTypes = {
    cityName: PropTypes.string.isRequired,
    selectLocation: PropTypes.func.isRequired,
}