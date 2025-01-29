import "../styles/Settings.css"
import {useContext} from "react";
import WeatherContext from "../contexts/WeatherContext.jsx";
import close from "./../assets/delete.png";

const Settings = ({isOpened, handleClickClose}) => {

    const {settings, changeSettings} = useContext(WeatherContext);

    const handleCheckboxClicked = (e) => {
        changeSettings({...settings, [e.target.name]: e.target.checked});
    }

    return (

        settings &&
        <>
            <div className={`settings-container ${isOpened ? "activated" : ""}`}>
                <div className="ml-4 mr-4">
                    <div className="flex justify-between items-center my-6">
                        <p className="subtitle">Settings</p>
                        <img className="max-w-[20px] max-h-[20px] cursor-pointer" src={close} alt="Delete"
                             onClick={handleClickClose}/>
                    </div>
                    <form className="flex-col">
                        <div className="relative">
                            <input type="checkbox" name="feelTemperature" className="custom-checkbox"
                                   defaultChecked={settings.feelTemperature} onChange={handleCheckboxClicked}/>
                            <label className="body-text" htmlFor="feelTemperature">Feel temperature</label>
                        </div>
                        <div className="relative">
                            <input type="checkbox" name="humidity" className="custom-checkbox"
                                   defaultChecked={settings.humidity} onChange={handleCheckboxClicked}/>
                            <label className="body-text"  htmlFor="humidity">Humidity</label>
                        </div>
                        <div className="relative">
                            <input type="checkbox" name="sunset" className="custom-checkbox"
                                   defaultChecked={settings.sunset} onChange={handleCheckboxClicked}/>
                            <label className="body-text"  htmlFor="sunset">Sunset</label>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Settings;