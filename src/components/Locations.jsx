import {useState} from "react";
import "./../styles/Locations.css"
import SavedLocations from "./SavedLocations.jsx";
import AddLocations from "./AddLocations.jsx";

const Locations = () => {
    const [isSavedChosen, setIsSavedChosen] = useState(true)

    return (
        <>
            <div className="main-container">
                <div className="locations-btn-container">
                    <button className={`location-btn body-text saved ${isSavedChosen ? "chosen" : ""}`} onClick={
                        () => {
                            setIsSavedChosen(prevState => !prevState)
                        }
                    }>Saved
                    </button>
                    <button className={`location-btn body-text add ${!isSavedChosen ? "chosen" : ""}`} onClick={
                        () => {
                            setIsSavedChosen(prevState => !prevState)
                        }
                    }>Add
                    </button>
                </div>
                {isSavedChosen ? <SavedLocations /> : <AddLocations />}
            </div>
        </>
    )
}

export default Locations;