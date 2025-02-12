import {useContext} from "react";
import "../../styles/Locations.css"
import SavedLocations from "./Saved/SavedLocations.jsx";
import SearchLocations from "./Search/SearchLocations.jsx";
import LocationOptionContext from "../../contexts/LocationOptionContext.jsx";

const Locations = () => {
    const {isSavedOptionChosen, changeLocationSwitcherOption} = useContext(LocationOptionContext)

    return (
        <>
            <div className="main-container">
                <div className="locations-btn-container">
                    <button className={`location-btn body-text2 saved ${isSavedOptionChosen ? "chosen" : ""}`} onClick={
                        changeLocationSwitcherOption
                    }>Saved
                    </button>
                    <button className={`location-btn body-text2 add ${!isSavedOptionChosen ? "chosen" : ""}`} onClick={
                        changeLocationSwitcherOption
                    }>Search
                    </button>
                </div>
                {isSavedOptionChosen ? <SavedLocations /> : <SearchLocations />}
            </div>
        </>
    )
}

export default Locations;