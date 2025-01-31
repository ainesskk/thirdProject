import "../styles/Settings.css"
import {useContext} from "react"
import SettingsContext from "../contexts/SettingsContext.jsx"

const Settings = () => {
    const {settings, changeSettings} = useContext(SettingsContext);

    const handleCheckboxClicked = (e) => {
        changeSettings({...settings, [e.target.name]: e.target.checked});
    }

    return (
        settings &&
        <>
            <p className="subtitle my-3">Settings</p>
            <form className="flex-col">
                <div className="relative">
                    <input type="checkbox" name="feelTemperature" className="custom-checkbox"
                           defaultChecked={settings.feelTemperature} onChange={handleCheckboxClicked}/>
                    <label className="body-text" htmlFor="feelTemperature">Feel temperature</label>
                </div>
                <div className="relative">
                    <input type="checkbox" name="humidity" className="custom-checkbox"
                           defaultChecked={settings.humidity} onChange={handleCheckboxClicked}/>
                    <label className="body-text" htmlFor="humidity">Humidity</label>
                </div>
                <div className="relative">
                    <input type="checkbox" name="sunset" className="custom-checkbox"
                           defaultChecked={settings.sunset} onChange={handleCheckboxClicked}/>
                    <label className="body-text" htmlFor="sunset">Sunset</label>
                </div>
            </form>
        </>

    )
}

export default Settings;