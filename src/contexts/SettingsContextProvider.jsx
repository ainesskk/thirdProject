import SettingsContext from "./SettingsContext.jsx";
import {useState, useEffect} from "react";
import {
    getSettings,
    saveSettings,
} from "../js/localStorage/localStorageFuncs.js"

const SettingsContextProvider = ({ children }) => {
    const [settings, setSettings] = useState(null);

    useEffect(() => {

        const getWeatherSettings = async () => {
            try {
                const startSettings = await getSettings();
                setSettings(startSettings);
            } catch (error) {
                console.error('Ошибка получения настроек:', error);
            }
        };

        getWeatherSettings();

    }, []);

    const changeSettings = async (newSettings) => {
        setSettings(newSettings);
        await saveSettings(newSettings);
    }

    return (
        <SettingsContext.Provider value={{
            settings,
            changeSettings,
        }}>
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsContextProvider;