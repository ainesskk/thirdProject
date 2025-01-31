import WeatherContextProvider from "./WeatherContextProvider.jsx";
import SettingsContextProvider from "./SettingsContextProvider.jsx";

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