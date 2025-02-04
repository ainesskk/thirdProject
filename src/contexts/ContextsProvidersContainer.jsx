import WeatherContextProvider from "./WeatherContextProvider.jsx";
import SettingsContextProvider from "./SettingsContextProvider.jsx";
import PropTypes from "prop-types";

const ContextsProvidersContainer = ({children}) => {
    return (
        <WeatherContextProvider>
            <SettingsContextProvider>
                    {children}
            </SettingsContextProvider>
        </WeatherContextProvider>
    )
}

export default ContextsProvidersContainer;

ContextsProvidersContainer.propTypes = {
    children: PropTypes.node.isRequired,
}