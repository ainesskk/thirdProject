import SavedCityItem from "./SavedCityItem.jsx"
import {useContext} from "react"
import WeatherContext from "../../../contexts/WeatherContext.jsx"
import preloader from "../../../assets/preloader.gif"
import {v4 as uuidv4} from 'uuid'

const SavedLocations = () => {
    const {currentCityInfo, savedLocations, changeSelectedLocation, selectedLocationInfo} = useContext(WeatherContext)

    const selectLocation = (cityName) => {
        changeSelectedLocation(cityName)
    }

    return (
        <>
            {
                currentCityInfo && savedLocations && selectedLocationInfo ?
                    <>
                        <p className="subtitle">Your location</p>
                        <SavedCityItem cityName={currentCityInfo.city} selectLocation={selectLocation} canBeDeleted={false} />
                        <p className="subtitle">Saved locations</p>
                        {
                            savedLocations.length > 0 ?
                                savedLocations.map((city) => (
                                    <SavedCityItem key={uuidv4()} cityName={city} selectLocation={selectLocation} canBeDeleted={true}/>))
                                :
                                <div className="m-4">
                                    <p className="body-text2">Nothing saved</p>
                                </div>
                        }
                    </>
                    :
                    <div className="flex justify-center">
                        <img className="max-w-8" src={preloader} alt="preloader"/>
                    </div>
            }
        </>
    )
}

export default SavedLocations;