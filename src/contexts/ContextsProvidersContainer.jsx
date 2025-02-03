import WeatherContextProvider from "./WeatherContextProvider.jsx";
import SettingsContextProvider from "./SettingsContextProvider.jsx";
import ModalContextProvider from "./ModalContextProvider.jsx";

const ContextsProvidersContainer = ({children}) => {
    return (
        <WeatherContextProvider>
            <SettingsContextProvider>
                <ModalContextProvider>
                    {children}
                </ModalContextProvider>
            </SettingsContextProvider>
        </WeatherContextProvider>
    )
}

export default ContextsProvidersContainer;