import "../styles/Navbar.css"
import BurgerMenu from "./BurgerMenu.jsx";
import gear from "./../assets/settings.png";
import menu from "./../assets/menu.png";
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
                <nav className="main-container navbar">
                        <a className="hidden md:block">
                            <li>
                                <p>Forecast</p>
                            </li>
                        </a>
                        <a  className="hidden md:block">
                            <li>
                                <p>Locations</p>
                            </li>
                        </a>
                    <a onClick={handleClickMenu}>
                        <li className="block md:hidden">
                            <img src={menu} alt="Menu"/>
                        </li>
                        <li className="hidden md:block">
                            <img src={gear} alt="Settings"/>
                        </li>
                    </a>
                </nav>
            </div>

            <BurgerMenu isOpened={isOpened} handleClickClose={handleClickClose}/>
        </>
    )
}

export default Navbar;