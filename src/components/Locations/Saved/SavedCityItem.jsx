import PropTypes from "prop-types";
import WeatherContext from "../../../contexts/WeatherContext.jsx";
import {useContext, useEffect, useState} from "react";
import minusBlack from "../../../assets/slim-minus-black.png";
import minus from "../../../assets/slim-minus.png";
import ModalWindow from "../../ModalWindow.jsx";


const SavedCityItem = ({cityName,  selectLocation, canBeDeleted}) => {
    const {selectedLocationInfo,deleteSavedLocation} = useContext(WeatherContext);
    const [minusImage, setMinusImage] = useState(minusBlack);
    const [isModalDisplayed, setIsModalDisplayed] = useState(false);

    useEffect(() => {
        if (selectedLocationInfo.city === cityName)
            setMinusImage(minus);
        else
            setMinusImage(minusBlack);
    }, []);

    const handleClickDelete = (e) => {
        e.preventDefault();
        setIsModalDisplayed(true);
    }

    const deleteCallback = () => {
        deleteSavedLocation(cityName);
        setIsModalDisplayed(false);
    };

    const closeWindowCallback = () => {
        setIsModalDisplayed(false);
    };

    return (
        <>
            <div className={`inline-block px-[15px] py-[10px] m-4 rounded-2xl cursor-pointer transition-all
                ${selectedLocationInfo.city === cityName ? "bg-blue-700" : "bg-gray-200 hover:bg-gray-300"}`} >
                <div className="flex">
                    <p className={`body-text2 ${selectedLocationInfo.city === cityName ? "text-white" : "text-black"}`} onClick={() => {selectLocation(cityName)}}>{cityName}</p>
                    {
                        canBeDeleted && <img className="max-w-[20px] ml-3" src={minusImage} alt="minus" onClick={handleClickDelete}/>
                    }
                </div>
            </div>
            {isModalDisplayed && <ModalWindow deleteCallback={deleteCallback} closeWindowCallback={closeWindowCallback} />}
        </>
    )
}

export default SavedCityItem;

SavedCityItem.propTypes = {
    cityName: PropTypes.string.isRequired,
    selectLocation: PropTypes.func.isRequired,
    canBeDeleted: PropTypes.bool.isRequired,
}