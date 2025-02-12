import LocationOptionContext from './LocationOptionContext.jsx';
import {useEffect, useState} from 'react'
import PropTypes from "prop-types";
import {
    getLocationSwitcherOption,
    saveLocationSwitcherOption
} from "../js/sessionStorage/sessionStorageFuncs.js";

const LocationOptionContextProvider = ({ children }) => {
    const [isSavedOptionChosen, setIsSavedOptionChosen] = useState(null)

    useEffect(() => {
        setIsSavedOptionChosen(getLocationSwitcherOption());
    }, [])

    const changeLocationSwitcherOption = () => {
        setIsSavedOptionChosen(prevState => {
            const newState = !prevState
            saveLocationSwitcherOption(newState);
            return newState;
        });
    }

    return(
        <LocationOptionContext.Provider value={{isSavedOptionChosen, changeLocationSwitcherOption}}>
            {children}
        </LocationOptionContext.Provider>
    )
}

export default LocationOptionContextProvider;

LocationOptionContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}