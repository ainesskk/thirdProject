import {useState} from "react";
import "./../styles/Locations.css"
import SavedLocations from "./SavedLocations.jsx";
import SearchLocations from "./SearchLocations.jsx";

const Locations = () => {
    const [isSavedChosen, setIsSavedChosen] = useState(true)

    return (
        <>
            <div className="main-container">
                <div className="locations-btn-container">
                    <button className={`location-btn body-text2 saved ${isSavedChosen ? "chosen" : ""}`} onClick={
                        () => {
                            setIsSavedChosen(prevState => !prevState)
                        }
                    }>Saved
                    </button>
                    <button className={`location-btn body-text2 add ${!isSavedChosen ? "chosen" : ""}`} onClick={
                        () => {
                            setIsSavedChosen(prevState => !prevState)
                        }
                    }>Search
                    </button>
                </div>
                {isSavedChosen ? <SavedLocations /> : <SearchLocations />}
            </div>
        </>
    )
}

export default Locations;