import React, { useContext, useEffect, useState } from "react";
import plus from "./../assets/plus.png";
import minus from "./../assets/minus- black.png"
import WeatherContext from "../contexts/WeatherContext.jsx";

const SaveButton = ({ cityInfo }) => {
    const [isCitySaved, setIsCitySaved] = useState(false);
    const { savedLocations, addSavedLocation, deleteSavedLocation } = useContext(WeatherContext);

    useEffect(() => {
        if (cityInfo && savedLocations.some(location => location === cityInfo.city)) {
            setIsCitySaved(true);
        }
    }, [savedLocations, cityInfo]);

    if (!cityInfo) {
        return null;
    }

    const handleSaveClick = (e) => {
        e.preventDefault();
        addSavedLocation(cityInfo.city);
        setIsCitySaved(true);
    };

    const handleDeleteClick = (e) => {
        e.preventDefault();
        deleteSavedLocation(cityInfo.city);
        setIsCitySaved(false);
    };

    return (
        <>
            {
                isCitySaved ?
                    <button className="absolute mt-3 ml-[55px] md:ml-[65px] bg-gray-300 p-2 rounded-2xl" onClick={handleDeleteClick}>
                        <img src={minus} className="max-w-[25px] md:max-w-[35px]" alt="minus"/>
                    </button>
                    :
                    <button className="absolute mt-3 ml-[55px] md:ml-[65px] bg-blue-700 p-2 rounded-2xl" onClick={handleSaveClick}>
                        <img src={plus} className="max-w-[25px] md:max-w-[35px]" alt="arrow"/>
                    </button>
            }
        </>
    );
};

export default SaveButton;
