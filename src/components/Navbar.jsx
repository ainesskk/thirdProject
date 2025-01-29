import "../styles/Navbar.css"
import Settings from "./Settings.jsx";
import gear from "./../assets/settings.png";
import {useState} from "react";

const Navbar = () => {

    const [isOpened, setIsOpened] = useState(false);

    const handleClickMenu = () => {
        setIsOpened(prevState => !prevState);
    }

    const handleClickClose = () => {
        setIsOpened(prevState => !prevState);
    }

    return (
        <>
            <div className="navbar-container">

                {/*<div className="main-container">*/}
                    <nav className="main-container navbar">
                        <a>
                            <li>
                                {/*<img src="src/assets/weather.png" alt="Weather"/>*/}
                                <p>Forecast</p>
                            </li>
                        </a>
                        <a>
                            <li>
                                {/*<img src="src/assets/pin.png" alt="Pin"/>*/}
                                <p>Locations</p>
                            </li>
                        </a>
                        <a onClick={handleClickMenu}>
                            <li>
                                <img src={gear} alt="Settings"/>
                                {/*<p>Settings</p>*/}
                            </li>
                        </a>
                    </nav>
                {/*</div>*/}
                </div>

                <Settings isOpened={isOpened} handleClickClose={handleClickClose}/>
            </>
            )
            }

            export default Navbar;