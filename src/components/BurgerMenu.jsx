import "../styles/Settings.css"
import {useContext} from "react";
import WeatherContext from "../contexts/WeatherContext.jsx";
import close from "./../assets/delete.png";

const BurgerMenu = ({isOpened, handleClickClose}) => {

    const {settings, changeSettings} = useContext(WeatherContext);

    const handleCheckboxClicked = (e) => {
        changeSettings({...settings, [e.target.name]: e.target.checked});
    }

    return (
        settings &&
        <>
            <div className={`settings-container ${isOpened ? "activated" : ""}`}>
                <div className="mx-4">
                    <img className="max-w-[20px] max-h-[20px] cursor-pointer my-6" src={close} alt="Delete"
                         onClick={handleClickClose}/>
                    <div className="flex flex-col md:hidden">
                        <a className="cursor-pointer "><p
                            className="subtitle inline-block my-3 border-b-2 border-b-blue-700">Forecast</p></a>
                        <a className="cursor-pointer"><p
                            className="subtitle inline-block my-3 border-b-2 border-b-blue-700">Locations</p></a>
                    </div>
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
                </div>
            </div>
        </>

    )
}

export default BurgerMenu;