import CityItem from "./../components/CityItem.jsx"
import {useContext} from "react"
import WeatherContext from "../contexts/WeatherContext.jsx"
import preloader from "../assets/preloader.gif"
import {v4 as uuidv4} from 'uuid'

const SavedLocations = () => {
    const {currentCityInfo, savedLocations, changeSelectedLocation} = useContext(WeatherContext)

    const selectLocation = (cityName) => {
        changeSelectedLocation(cityName)
    }

    return (
        <>
            {
                currentCityInfo && savedLocations ?
                    <>
                        <p className="subtitle">Your location</p>
                        <CityItem cityName={currentCityInfo.city} selectLocation={selectLocation}/>
                        <p className="subtitle">Saved locations</p>
                        {
                            savedLocations.length > 0 ?
                                savedLocations.map((city) => (
                                    <CityItem key={uuidv4()} cityName={city} selectLocation={selectLocation}/>))
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