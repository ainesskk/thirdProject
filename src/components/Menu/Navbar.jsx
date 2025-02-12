import "../../styles/Navbar.css";
import BurgerMenu from "./BurgerMenu.jsx";
import gear from "../../assets/settings.png";
import menu from "../../assets/menu.png";
import {useState} from "react";
import {Link} from "react-router-dom";

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
                    <Link to="/">
                            <li className="hidden md:block">
                                <p>Forecast</p>
                            </li>
                    </Link>
                    <Link to="/locations">
                            <li  className="hidden md:block">
                                <p>Locations</p>
                            </li>
                    </Link>
                    <a className="nav-item-icon" onClick={handleClickMenu}>
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