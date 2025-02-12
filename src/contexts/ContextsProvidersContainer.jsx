import WeatherContextProvider from "./WeatherContextProvider.jsx";
import SettingsContextProvider from "./SettingsContextProvider.jsx";
import PropTypes from "prop-types";
import LocationOptionContextProvider from "./LocationOptionContextProvider.jsx";

const ContextsProvidersContainer = ({children}) => {
    return (
        <WeatherContextProvider>
            <SettingsContextProvider>
                <LocationOptionContextProvider>
                    {children}
                </LocationOptionContextProvider>
            </SettingsContextProvider>
        </WeatherContextProvider>
    )
}

export default ContextsProvidersContainer;

ContextsProvidersContainer.propTypes = {
    children: PropTypes.node.isRequired,
}